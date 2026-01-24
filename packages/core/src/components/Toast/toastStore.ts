import { useSyncExternalStore } from 'react';

export type ToastType = 'default' | 'success' | 'error' | 'loading';

export interface ToastData {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  icon?: React.ReactNode;
}

type ToastOptions = Omit<ToastData, 'id' | 'message' | 'type'>;

let memoryState: ToastData[] = [];
let listeners: Array<() => void> = [];
const notify = () => listeners.forEach((l) => l());

let count = 0;
const genId = () => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

const dispatch = (message: string, type: ToastType, options?: ToastOptions) => {
  const id = genId();
  const newToast = { id, message, type, ...options };

  memoryState = [newToast];
  notify();
  return id;
};

export const toast = (message: string, options?: ToastOptions) =>
  dispatch(message, 'default', options);

toast.success = (message: string, options?: ToastOptions) =>
  dispatch(message, 'success', options);

toast.error = (message: string, options?: ToastOptions) =>
  dispatch(message, 'error', options);

toast.loading = (message: string, options?: ToastOptions) =>
  dispatch(message, 'loading', {
    ...options,
    duration: options?.duration ?? 100000,
  });

toast.dismiss = (id: string) => {
  memoryState = memoryState.filter((t) => t.id !== id);
  notify();
};

export const useToastStore = () => {
  return useSyncExternalStore(
    (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
    () => memoryState,
  );
};
