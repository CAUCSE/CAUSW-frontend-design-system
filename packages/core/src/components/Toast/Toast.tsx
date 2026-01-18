import * as ToastPrimitives from '@radix-ui/react-toast';
import { colorStyles, getToastStyles, ToastVariant } from './Toast.styles';
import { Text } from '../Text';
import { mergeStyles } from '../../utils';

export interface ToastProps extends React.ComponentProps<
  typeof ToastPrimitives.Root
> {
  variant?: ToastVariant;
  message?: string;
}

export const Toast = ({
  className,
  variant = 'default',
  message,
  ...props
}: ToastProps) => {
  const contentColor = colorStyles[variant];

  return (
    <ToastPrimitives.Root
      className={getToastStyles({ variant, className })}
      {...props}
    >
      {message && (
        <ToastPrimitives.Description asChild>
          <Text as="p" typography="body-16-medium" textColor={contentColor}>
            {message}
          </Text>
        </ToastPrimitives.Description>
      )}
    </ToastPrimitives.Root>
  );
};

export type ToastViewportProps = React.ComponentProps<
  typeof ToastPrimitives.Viewport
>;

export const ToastViewport = ({ className, ...props }: ToastViewportProps) => (
  <ToastPrimitives.Viewport
    className={mergeStyles([
      'fixed bottom-20.5 left-1/2 z-50 flex max-h-screen w-full -translate-x-1/2 flex-col-reverse items-center xl:bottom-14',
      className,
    ])}
    {...props}
  />
);

export const ToastProvider = ToastPrimitives.Provider;
