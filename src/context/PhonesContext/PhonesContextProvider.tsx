import { FC, ReactNode, memo } from 'react';
import { PhonesContext } from './PhonesContext';
import { PhonesContextProps } from './Props';

interface PhonesContextProviderProps {
  children: ReactNode;
}

const value: PhonesContextProps = {
  total: 15,
  limit: 2,
};

export const PhonesContextProvider: FC<PhonesContextProviderProps> = memo(
  ({ children }) => {
    return (
      <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
    );
  },
);
