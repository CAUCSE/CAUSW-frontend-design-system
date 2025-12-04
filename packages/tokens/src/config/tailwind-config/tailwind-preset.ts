import type { Config } from 'tailwindcss';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';
import { typography } from '../../tokens/typography';

/**
 * CAUSW Design System Tailwind CSS Preset
 *
 * @example
 * ```ts
 * // tailwind.config.ts
 * import { caswPreset } from '@causw/design-system/tailwind-preset';
 *
 * export default {
 *   presets: [caswPreset],
 *   content: ['./src/**\/*.{js,ts,jsx,tsx}'],
 * } satisfies Config;
 * ```
 */
export const caswPreset: Partial<Config> = {
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: {
        sans: typography.fontFamily.base,
        mono: typography.fontFamily.mono,
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
    },
  },
};

export default caswPreset;
