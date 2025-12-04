import type { Config } from 'tailwindcss';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

// Tailwind expects string values for fontWeight and lineHeight
const fontWeight = Object.fromEntries(
  Object.entries(typography.fontWeight).map(([key, value]) => [
    key,
    String(value),
  ]),
) as Record<keyof typeof typography.fontWeight, string>;

const lineHeight = Object.fromEntries(
  Object.entries(typography.lineHeight).map(([key, value]) => [
    key,
    String(value),
  ]),
) as Record<keyof typeof typography.lineHeight, string>;

/**
 * CAUSW Design System Tailwind CSS Preset
 *
 * @example
 * ```ts
 * // tailwind.config.ts
 * import { caswPreset } from '@causw/tokens/tailwind-preset';
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
      colors: {
        primary: colors.primary,
        gray: colors.gray,
        success: {
          DEFAULT: colors.success.main,
          light: colors.success.light,
          dark: colors.success.dark,
        },
        error: {
          DEFAULT: colors.error.main,
          light: colors.error.light,
          dark: colors.error.dark,
        },
        warning: {
          DEFAULT: colors.warning.main,
          light: colors.warning.light,
          dark: colors.warning.dark,
        },
        info: {
          DEFAULT: colors.info.main,
          light: colors.info.light,
          dark: colors.info.dark,
        },
      },
      spacing,
      fontFamily: {
        sans: typography.fontFamily.base,
        mono: typography.fontFamily.mono,
      },
      fontSize: typography.fontSize,
      fontWeight,
      lineHeight,
    },
  },
};

export default caswPreset;
