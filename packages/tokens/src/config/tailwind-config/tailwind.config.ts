import type { Config } from 'tailwindcss';
import { caswPreset } from './tailwind-preset';

/**
 * CAUSW Design System Tailwind CSS Configuration
 *
 * 이 파일은 `@config` 지시자와 함께 사용할 수 있는 완전한 Tailwind config입니다.
 *
 * @example CSS에서 사용
 * ```css
 * @import 'tailwindcss';
 * @config '@causw/tokens/tailwind.config';
 * ```
 *
 * @example JS/TS config에서 사용
 * ```ts
 * // tailwind.config.ts
 * import caswConfig from '@causw/tokens/tailwind.config';
 * export default {
 *   ...caswConfig,
 *   content: [...caswConfig.content, './src/**\/*.{js,ts,jsx,tsx}'],
 * };
 * ```
 */
export const caswConfig: Config = {
  content: [
    // CAUSW 컴포넌트 패키지의 빌드된 파일 스캔
    './node_modules/@causw/components/dist/**/*.{js,mjs}',
    './node_modules/@causw/tokens/dist/**/*.{js,mjs}',
  ],
  presets: [caswPreset as Config],
};

export default caswConfig;
