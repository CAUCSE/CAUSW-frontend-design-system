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
  brandLogo: string;
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
  const [mono, colored, brandLogo, generator, types] = await Promise.all([
    computeDirHash(path.join(SVG_DIR, 'mono')),
    computeDirHash(path.join(SVG_DIR, 'colored')),
    computeDirHash(path.join(SVG_DIR, 'brand-logo')),
    computeFileHash(GENERATOR_FILE),
    computeFileHash(TYPES_FILE),
  ]);

  return { mono, colored, brandLogo, generator, types };
}

function toPascalCase(str: string): string {
  return str
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());
}

function sanitizeSvgContent(svgContent: string): string {
  return svgContent
    .replace(/<\?xml[\s\S]*?\?>/gi, '')
    .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();
}

function generateMonoComponent(
  componentName: string,
  svgContent: string,
): string {
  const sanitizedSvg = sanitizeSvgContent(svgContent);
  const viewBoxMatch = sanitizedSvg.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  const innerContent = sanitizedSvg
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
  const sanitizedSvg = sanitizeSvgContent(svgContent);
  const viewBoxMatch = sanitizedSvg.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  const innerContent = sanitizedSvg
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
  const preprocessed = content.replace(
    /style="mask-type:\s*([^";]+);?"/g,
    'maskType="$1"',
  );

  const styleAsObject = preprocessed.replace(
    /style="([^"]*)"/g,
    (_match, styleValue: string) => {
      const declarations = styleValue
        .split(';')
        .map((decl) => decl.trim())
        .filter(Boolean);

      if (declarations.length === 0) {
        return '';
      }

      const styleEntries = declarations
        .map((decl) => {
          const colonIndex = decl.indexOf(':');
          if (colonIndex === -1) return null;

          const rawKey = decl.slice(0, colonIndex).trim();
          const rawValue = decl.slice(colonIndex + 1).trim();
          if (!rawKey || !rawValue) return null;

          const camelKey = rawKey.replace(/-([a-z])/g, (_, ch) =>
            ch.toUpperCase(),
          );
          return `${camelKey}: '${rawValue}'`;
        })
        .filter(Boolean)
        .join(', ');

      return styleEntries ? `style={{ ${styleEntries} }}` : '';
    },
  );

  return styleAsObject
    .replace(/xlink:href=/g, 'xlinkHref=')
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

async function generateIcons(type: 'mono' | 'colored' | 'brand-logo') {
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

    // colored/brand-logo 아이콘 접미사 규칙
    if (type === 'colored') {
      componentName = `${componentName}Colored`;
    } else if (type === 'brand-logo' && !componentName.endsWith('Logo')) {
      componentName = `${componentName}Logo`;
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
  const brandLogoOnly = args.includes('--brand-logo');
  const force = args.includes('--force');

  // 캐시 체크 (전체 생성 모드에서만)
  if (!monoOnly && !coloredOnly && !brandLogoOnly && !force) {
    const [cachedHashes, currentHashes] = await Promise.all([
      loadCache(),
      computeCurrentHashes(),
    ]);

    if (
      cachedHashes &&
      cachedHashes.mono === currentHashes.mono &&
      cachedHashes.colored === currentHashes.colored &&
      cachedHashes.brandLogo === currentHashes.brandLogo &&
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
  let brandLogoExports: string[] = [];

  if (!coloredOnly && !brandLogoOnly) {
    monoExports = await generateIcons('mono');
    console.log(`[icons] mono: ${monoExports.length} icons`);
  }

  if (!monoOnly && !brandLogoOnly) {
    coloredExports = await generateIcons('colored');
    console.log(`[icons] colored: ${coloredExports.length} icons`);
  }

  if (!monoOnly && !coloredOnly) {
    brandLogoExports = await generateIcons('brand-logo');
    console.log(`[icons] brand-logo: ${brandLogoExports.length} icons`);
  }

  if (!monoOnly && !coloredOnly && !brandLogoOnly) {
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
export * from './brand-logo';
`;

    await fs.writeFile(path.join(SRC_DIR, 'index.ts'), mainIndex);

    // 캐시 저장
    const currentHashes = await computeCurrentHashes();
    await saveCache(currentHashes);
  }

  console.log(
    `[icons] done (${monoExports.length + coloredExports.length + brandLogoExports.length} total)`,
  );
}

main().catch((err) => {
  console.error('[icons] error:', err);
  process.exit(1);
});
