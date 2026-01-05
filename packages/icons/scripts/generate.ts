/**
 * SVGR 아이콘 생성 스크립트
 * SVG 파일들을 React TypeScript 컴포넌트로 변환
 * prebuild 시점에 자동 실행
 */

import { glob } from 'glob';
import * as fs from 'fs/promises';
import * as path from 'path';

const ROOT_DIR = path.resolve(__dirname, '..');
const SVG_DIR = path.join(ROOT_DIR, 'svg');
const SRC_DIR = path.join(ROOT_DIR, 'src');

function toPascalCase(str: string): string {
  return str
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());
}

function generateMonoComponent(
  componentName: string,
  svgContent: string,
): string {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  const innerContent = svgContent
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();

  return `import type { MonoIconProps } from '../types';

export const ${componentName} = ({ title, ...props }: MonoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="${viewBox}"
    fill="currentColor"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    ${innerContent}
  </svg>
);

${componentName}.displayName = '${componentName}';
`;
}

function generateColoredComponent(
  componentName: string,
  svgContent: string,
): string {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  const innerContent = svgContent
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();

  return `import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const ${componentName} = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="${viewBox}"
    width={size}
    height={size}
    fill="none"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    ${innerContent}
  </svg>
);

${componentName}.displayName = '${componentName}';
`;
}

function convertToJsxAttributes(content: string): string {
  return content
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stop-color=/g, 'stopColor=')
    .replace(/stop-opacity=/g, 'stopOpacity=')
    .replace(/xmlns:xlink=/g, 'xmlnsXlink=');
}

// mono와 colored 아이콘 이름 자동 감지
async function detectConflictingIcons(): Promise<Set<string>> {
  const monoDir = path.join(SVG_DIR, 'mono');
  const coloredDir = path.join(SVG_DIR, 'colored');

  const monoFiles = await glob('*.svg', { cwd: monoDir });
  const coloredFiles = await glob('*.svg', { cwd: coloredDir });

  const monoNames = new Set<string>(
    monoFiles.map((f: string) => toPascalCase(path.basename(f, '.svg'))),
  );
  const coloredNames = new Set<string>(
    coloredFiles.map((f: string) => toPascalCase(path.basename(f, '.svg'))),
  );

  const conflicts = new Set<string>();
  for (const name of coloredNames) {
    if (monoNames.has(name)) {
      conflicts.add(name);
    }
  }

  return conflicts;
}

async function generateIcons(
  type: 'mono' | 'colored',
  conflictingIcons: Set<string>,
) {
  const svgDir = path.join(SVG_DIR, type);
  const outDir = path.join(SRC_DIR, type);

  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  const svgFiles = await glob('*.svg', { cwd: svgDir });
  const exports: string[] = [];

  for (const file of svgFiles) {
    const svgPath = path.join(svgDir, file);
    const svgCode = await fs.readFile(svgPath, 'utf-8');
    const baseName = path.basename(file, '.svg');
    let componentName = toPascalCase(baseName);

    // colored 아이콘 중 mono와 이름이 겹치면 Colored 접미사 추가
    if (type === 'colored' && conflictingIcons.has(componentName)) {
      componentName = `${componentName}Colored`;
    }

    let componentCode =
      type === 'mono'
        ? generateMonoComponent(componentName, svgCode)
        : generateColoredComponent(componentName, svgCode);

    componentCode = convertToJsxAttributes(componentCode);

    await fs.writeFile(
      path.join(outDir, `${componentName}.tsx`),
      componentCode,
    );
    exports.push(componentName);
  }

  const indexContent =
    exports
      .sort()
      .map((name) => `export { ${name} } from './${name}';`)
      .join('\n') + '\n';

  await fs.writeFile(path.join(outDir, 'index.ts'), indexContent);

  return exports;
}

async function main() {
  const args = process.argv.slice(2);
  const monoOnly = args.includes('--mono');
  const coloredOnly = args.includes('--colored');

  console.log('[icons] generating...');

  // 충돌 아이콘 자동 감지
  const conflictingIcons = await detectConflictingIcons();

  let monoExports: string[] = [];
  let coloredExports: string[] = [];

  if (!coloredOnly) {
    monoExports = await generateIcons('mono', conflictingIcons);
    console.log(`[icons] mono: ${monoExports.length} icons`);
  }

  if (!monoOnly) {
    coloredExports = await generateIcons('colored', conflictingIcons);
    console.log(`[icons] colored: ${coloredExports.length} icons`);
  }

  if (!monoOnly && !coloredOnly) {
    const mainIndex = `export type {
  MonoIconProps,
  ColoredIconProps,
  MonoIconComponent,
  ColoredIconComponent,
} from './types';
export { DEFAULT_SIZE } from './types';

export * from './mono';
export * from './colored';
`;

    await fs.writeFile(path.join(SRC_DIR, 'index.ts'), mainIndex);
  }

  console.log(
    `[icons] done (${monoExports.length + coloredExports.length} total)`,
  );
}

main().catch((err) => {
  console.error('[icons] error:', err);
  process.exit(1);
});
