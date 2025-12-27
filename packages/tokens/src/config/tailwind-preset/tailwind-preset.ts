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
 * import { causwPreset } from '@causw/design-system/tailwind-preset';
 *
 * export default {
 *   presets: [causwPreset],
 *   content: ['./src/**\/*.{js,ts,jsx,tsx}'],
 * } satisfies Config;
 * ```
 */
export const causwPreset: Partial<Config> = {
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: {
        sans: typography.fontFamily.sans,
        mono: typography.fontFamily.mono,
        serif: typography.fontFamily.serif,
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
    },
  },
};
