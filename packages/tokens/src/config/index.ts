import type { Config } from 'tailwindcss';
import { causwContent } from './tailwind-content';
import { causwPreset } from './tailwind-preset';

export { causwContent, causwPreset };

/**
 * Tailwind CSS 4 config for use with @config directive
 *
 * @example
 * ```css
 * @import 'tailwindcss';
 * @config '@causw/tokens/config';
 * ```
 */
const causwConfig: Config = {
  content: causwContent,
  presets: [causwPreset as Partial<Config>],
};

export default causwConfig;
