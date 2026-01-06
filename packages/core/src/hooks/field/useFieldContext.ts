import { createContext, useContext } from 'react';

// Field Context
interface FieldContextValue {
  id: string;
  disabled: boolean;
  error: boolean;
}

export const FieldContext = createContext<FieldContextValue | null>(null);

/**
 * Hook to access Field context.
 * Returns null if not within a Field - allows input components to work independently.
 */
export const useFieldContext = () => {
  const context = useContext(FieldContext);
  if (!context) {
    return null;
  }
  return context;
};
