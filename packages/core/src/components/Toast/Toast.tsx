import * as ToastPrimitives from '@radix-ui/react-toast';
import { toast, ToastVariants } from './Toast.styles';
import { Text } from '../Text';
import { HStack } from '../HStack';

export interface ToastProps extends React.ComponentProps<
  typeof ToastPrimitives.Root
> {
  variant?: ToastVariants['variant'];
  message?: string;
  icon?: React.ReactNode;
}

export const Toast = ({
  className,
  variant = 'default',
  message,
  icon,
  ...props
}: ToastProps) => {
  const { root } = toast({ variant });

  return (
    <ToastPrimitives.Root className={root({ className })} {...props}>
      <HStack gap="sm" align="center">
        {icon && icon}
        {message && (
          <ToastPrimitives.Description asChild>
            <Text as="p" typography="body-16-medium" textColor="white">
              {message}
            </Text>
          </ToastPrimitives.Description>
        )}
      </HStack>
    </ToastPrimitives.Root>
  );
};

export type ToastViewportProps = React.ComponentProps<
  typeof ToastPrimitives.Viewport
>;

export const ToastViewport = ({ className, ...props }: ToastViewportProps) => {
  const { viewport } = toast();

  return (
    <ToastPrimitives.Viewport className={viewport({ className })} {...props} />
  );
};

export const ToastProvider = ToastPrimitives.Provider;
