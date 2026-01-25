import * as ToastPrimitives from '@radix-ui/react-toast';
import { toast, ToastVariants } from './Toast.styles';
import { Text, TextVariants } from '../Text';
import { mergeStyles } from '../../utils';

export interface ToastProps
  extends React.ComponentProps<typeof ToastPrimitives.Root>, ToastVariants {
  message?: string;
  textColor: TextVariants['textColor'];
}

export const Toast = ({
  className,
  textColor = 'white',
  variant = 'default',
  message,
  ...props
}: ToastProps) => {
  return (
    <ToastPrimitives.Root className={toast({ variant, className })} {...props}>
      {message && (
        <ToastPrimitives.Description asChild>
          <Text as="p" typography="body-16-medium" textColor={textColor}>
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
