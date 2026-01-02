export const typography = {
  fontFamily: {
    sans: [
      'Pretendard',
      'Pretendard Variable',
      '-apple-system',
      'BlinkMacSystemFont',
      'system-ui',
      'Roboto',
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'sans-serif',
    ],
    mono: [
      'Pretendard',
      'Pretendard Variable',
      'ui-monospace',
      'SFMono-Regular',
      'SF Mono',
      'Menlo',
      'Consolas',
      'Liberation Mono',
      'monospace',
    ],
    serif: [
      'Pretendard',
      'Pretendard Variable',
      'ui-serif',
      'Georgia',
      'Cambria',
      'Times New Roman',
      'Times',
      'serif',
    ],
  },
  fontSize: {
    '2xs': '0.75rem', // 12px
    xs: '0.875rem', // 14px
    sm: '0.9375rem', // 15px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.375rem', // 22px
    '3xl': '1.5rem', // 24px
    '4xl': '1.875rem', // 30px
    '5xl': '2rem', // 32px
    '6xl': '3rem', // 48px
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.5',
    normal: '1.6',
  },
} as const;
