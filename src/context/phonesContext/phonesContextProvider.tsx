import { FC, ReactNode, memo } from 'react';
import { PhonesContext } from './phonesContext';

interface PhonesContextProviderProps {
  children: ReactNode;
}

const value = {
  countPhones: 15,
};

// eslint-disable-next-line react/display-name
export const PhonesContextProvider: FC<PhonesContextProviderProps> = memo(
  ({ children }) => {
    return (
      <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
    );
  },
);
