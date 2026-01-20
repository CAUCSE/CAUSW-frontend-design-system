import React, { createContext } from 'react';
import { HeaderAlign } from '../../components/BottomSheet/BottomSheet';

interface BottomSheetContextValue {
  headerAlign: HeaderAlign;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const BottomSheetContext = createContext<
  BottomSheetContextValue | undefined
>(undefined);

export const useBottomSheet = () => {
  const context = React.useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }
  return context;
};
