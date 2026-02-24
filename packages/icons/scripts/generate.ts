/**
 * SVGR 아이콘 생성 스크립트
 * SVG 파일들을 React TypeScript 컴포넌트로 변환
 * prebuild 시점에 자동 실행
 * 해시 기반 캐싱으로 변경 시에만 재생성
 */

import { glob } from 'glob';
import * as fs from 'fs/promises';
import * as path from 'path';
import { createHash } from 'crypto';

const ROOT_DIR = path.resolve(__dirname, '..');
const SVG_DIR = path.join(ROOT_DIR, 'svg');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const CACHE_FILE = path.join(ROOT_DIR, '.icons-cache.json');
const GENERATOR_FILE = __filename;
const TYPES_FILE = path.join(SRC_DIR, 'types.ts');

interface CacheData {
  mono: string;
  colored: string;
  generator: string;
  types: string;
}

async function computeFileHash(filePath: string): Promise<string> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return createHash('sha256').update(content).digest('hex').slice(0, 16);
  } catch {
    return '';
  }
}

async function computeDirHash(dirPath: string): Promise<string> {
  const files = await glob('*.svg', { cwd: dirPath });
  const contents: string[] = [];

  for (const file of files.sort()) {
    const filePath = path.join(dirPath, file);
    const content = await fs.readFile(filePath, 'utf-8');
    contents.push(`${file}:${content}`);
  }

  return createHash('sha256')
    .update(contents.join('\n'))
    .digest('hex')
    .slice(0, 16);
}

async function loadCache(): Promise<CacheData | null> {
  try {
    const data = await fs.readFile(CACHE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}

async function saveCache(cache: CacheData): Promise<void> {
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
}

async function computeCurrentHashes(): Promise<CacheData> {
  const [mono, colored, generator, types] = await Promise.all([
    computeDirHash(path.join(SVG_DIR, 'mono')),
    computeDirHash(path.join(SVG_DIR, 'colored')),
    computeFileHash(GENERATOR_FILE),
    computeFileHash(TYPES_FILE),
  ]);

  return { mono, colored, generator, types };
}

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
    // fill, stroke 색상 제거
    .replace(/fill="[^"]+"/g, '')
    .replace(/stroke="#[A-Fa-f0-9]+"/g, 'stroke="currentColor"')
    .trim();

  return `import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const ${componentName} = ({
  size = DEFAULT_SIZE,
  active = false,
  color,
  title,
  ...props
}: MonoIconProps) => {
  const resolvedColor = color
    ? ICON_TOKEN_COLORS[color]
    : active
      ? MONO_COLORS.active
      : MONO_COLORS.inactive;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${viewBox}"
      width={size}
      height={size}
      fill={resolvedColor}
      color={resolvedColor}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      ${innerContent}
    </svg>
  );
};

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

  return `import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const ${componentName} = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => {
  const ref = React.useRef<SVGSVGElement | null>(null);

  useIsoLayoutEffect(() => {
    if (ref.current) {
      uniquifySvgIds(ref.current);
    }
  }, []);

  return (
    <svg
      ref={ref}
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
};

${componentName}.displayName = '${componentName}';
`;
}
function convertToJsxAttributes(content: string): string {
  return content
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/clip-path=/g, 'clipPath=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stop-color=/g, 'stopColor=')
    .replace(/stop-opacity=/g, 'stopOpacity=')
    .replace(/xmlns:xlink=/g, 'xmlnsXlink=')
    .replace(/color-interpolation-filters=/g, 'colorInterpolationFilters=')
    .replace(/flood-opacity=/g, 'floodOpacity=');
}

async function generateIcons(type: 'mono' | 'colored') {
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

    // 모든 colored 아이콘에 Colored 접미사 추가
    if (type === 'colored') {
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
  const force = args.includes('--force');

  // 캐시 체크 (전체 생성 모드에서만)
  if (!monoOnly && !coloredOnly && !force) {
    const [cachedHashes, currentHashes] = await Promise.all([
      loadCache(),
      computeCurrentHashes(),
    ]);

    if (
      cachedHashes &&
      cachedHashes.mono === currentHashes.mono &&
      cachedHashes.colored === currentHashes.colored &&
      cachedHashes.generator === currentHashes.generator &&
      cachedHashes.types === currentHashes.types
    ) {
      console.log('[icons] no changes, skipping generation');
      return;
    }
  }

  console.log(`[icons] generating${force ? ' (forced)' : ''}...`);

  let monoExports: string[] = [];
  let coloredExports: string[] = [];

  if (!coloredOnly) {
    monoExports = await generateIcons('mono');
    console.log(`[icons] mono: ${monoExports.length} icons`);
  }

  if (!monoOnly) {
    coloredExports = await generateIcons('colored');
    console.log(`[icons] colored: ${coloredExports.length} icons`);
  }

  if (!monoOnly && !coloredOnly) {
    const mainIndex = `export type {
  MonoIconProps,
  ColoredIconProps,
  MonoIconComponent,
  ColoredIconComponent,
  IconTokenColor,
} from './types';
export { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from './types';

export * from './mono';
export * from './colored';
`;

    await fs.writeFile(path.join(SRC_DIR, 'index.ts'), mainIndex);

    // 캐시 저장
    const currentHashes = await computeCurrentHashes();
    await saveCache(currentHashes);
  }

  console.log(
    `[icons] done (${monoExports.length + coloredExports.length} total)`,
  );
}

main().catch((err) => {
  console.error('[icons] error:', err);
  process.exit(1);
});
