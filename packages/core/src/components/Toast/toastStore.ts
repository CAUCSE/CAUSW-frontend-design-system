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

  memoryState = [...memoryState, newToast];
  notify();
  return id;
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
    () => [],
  );
};

const toastRoot = (message: string, options?: ToastOptions) =>
  dispatch(message, 'default', options);

export const toast = Object.assign(toastRoot, {
  success: (message: string, options?: ToastOptions) =>
    dispatch(message, 'success', options),
  error: (message: string, options?: ToastOptions) =>
    dispatch(message, 'error', options),
  loading: (message: string, options?: ToastOptions) =>
    dispatch(message, 'loading', {
      ...options,
      duration: options?.duration ?? 100000,
    }),
  dismiss: (id: string) => {
    memoryState = memoryState.filter((t) => t.id !== id);
    notify();
  },
});
