import { mergeStyles } from '../../utils';

export type TextVariant =
  | 'caption'
  | 'body2'
  | 'body'
  | 'subtitle'
  | 'title'
  | 'head'
  | 'fixed';

export type TextSize = 'sm' | 'md';
export type FixedSize = 12 | 14 | 15 | 16 | 18 | 20 | 24;
export type TextColor =
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'blue-50'
  | 'blue-500'
  | 'blue-700'
  | 'red-100'
  | 'red-400'
  | 'white'
  | 'black';

const colorClasses: Record<TextColor, string> = {
  'gray-50': 'text-gray-50',
  'gray-100': 'text-gray-100',
  'gray-200': 'text-gray-200',
  'gray-300': 'text-gray-300',
  'gray-400': 'text-gray-400',
  'gray-500': 'text-gray-500',
  'gray-600': 'text-gray-600',
  'gray-700': 'text-gray-700',
  'gray-800': 'text-gray-800',
  'gray-900': 'text-gray-900',
  'blue-50': 'text-blue-50',
  'blue-500': 'text-blue-500',
  'blue-700': 'text-blue-700',
  'red-100': 'text-red-100',
  'red-400': 'text-red-400',
  white: 'text-white-main',
  black: 'text-black-main',
};

type StyleConfig = {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
};

// Typography 스타일 매핑 (Tailwind utility classes via @causw/tokens preset)
const variantStyles: Record<
  Exclude<TextVariant, 'fixed'>,
  Record<TextSize, { normal: StyleConfig; point: StyleConfig }>
> = {
  caption: {
    sm: {
      normal: {
        fontSize: 'text-2xs',
        lineHeight: 'leading-normal',
        fontWeight: 'font-regular',
      },
      point: {
        fontSize: 'text-2xs',
        lineHeight: 'leading-normal',
        fontWeight: 'font-semibold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-xs',
        lineHeight: 'leading-normal',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-xs',
        lineHeight: 'leading-normal',
        fontWeight: 'font-semibold',
      },
    },
  },
  body2: {
    sm: {
      normal: {
        fontSize: 'text-xs',
        lineHeight: 'leading-normal',
        fontWeight: 'font-regular',
      },
      point: {
        fontSize: 'text-xs',
        lineHeight: 'leading-normal',
        fontWeight: 'font-semibold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-base',
        lineHeight: 'leading-normal',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-base',
        lineHeight: 'leading-normal',
        fontWeight: 'font-semibold',
      },
    },
  },
  body: {
    sm: {
      normal: {
        fontSize: 'text-base',
        lineHeight: 'leading-tight',
        fontWeight: 'font-regular',
      },
      point: {
        fontSize: 'text-base',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-lg',
        lineHeight: 'leading-normal',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-lg',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
    },
  },
  subtitle: {
    sm: {
      normal: {
        fontSize: 'text-lg',
        lineHeight: 'leading-normal',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-lg',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
    },
  },
  title: {
    sm: {
      normal: {
        fontSize: 'text-2xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
      point: {
        fontSize: 'text-2xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-5xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
      point: {
        fontSize: 'text-5xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
    },
  },
  head: {
    sm: {
      normal: {
        fontSize: 'text-4xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
      point: {
        fontSize: 'text-4xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-6xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
      point: {
        fontSize: 'text-6xl',
        lineHeight: 'leading-normal',
        fontWeight: 'font-bold',
      },
    },
  },
};

// Fixed variant 스타일
const fixedStyles: Record<FixedSize, StyleConfig> = {
  12: {
    fontSize: 'text-2xs',
    lineHeight: 'leading-normal',
    fontWeight: 'font-medium',
  },
  14: {
    fontSize: 'text-xs',
    lineHeight: 'leading-normal',
    fontWeight: 'font-medium',
  },
  15: {
    fontSize: 'text-sm',
    lineHeight: 'leading-normal',
    fontWeight: 'font-semibold',
  },
  16: {
    fontSize: 'text-base',
    lineHeight: 'leading-normal',
    fontWeight: 'font-medium',
  },
  18: {
    fontSize: 'text-lg',
    lineHeight: 'leading-normal',
    fontWeight: 'font-medium',
  },
  20: {
    fontSize: 'text-xl',
    lineHeight: 'leading-normal',
    fontWeight: 'font-semibold',
  },
  24: {
    fontSize: 'text-3xl',
    lineHeight: 'leading-normal',
    fontWeight: 'font-bold',
  },
};

export interface TextStylesOptions {
  variant: TextVariant;
  size: TextSize;
  fixedSize?: FixedSize;
  point: boolean;
  textColor: TextColor;
}

export function textStyles({
  variant,
  size,
  fixedSize,
  point,
  textColor,
}: TextStylesOptions): string {
  const baseStyles = 'font-sans';
  const colorClass = colorClasses[textColor];
  let config: StyleConfig;

  if (variant === 'fixed' && fixedSize) {
    config = fixedStyles[fixedSize];
  } else if (variant !== 'fixed') {
    const variantConfig = variantStyles[variant][size];
    config = point ? variantConfig.point : variantConfig.normal;
  } else {
    config = fixedStyles[16];
  }

  return mergeStyles([
    baseStyles,
    colorClass,
    config.fontSize,
    config.lineHeight,
    config.fontWeight,
  ]);
}
