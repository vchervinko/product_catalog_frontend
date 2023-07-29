import { FC, ReactNode, memo } from 'react';
import { PhonesContext } from './phonesContext';

interface PhonesContextProviderProps {
  children: ReactNode;
}

const value = {
  total: 15,
  limit: 2,
};

// eslint-disable-next-line react/display-name
export const PhonesContextProvider: FC<PhonesContextProviderProps> = memo(
  ({ children }) => {
    return (
      <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
    );
  },
);
