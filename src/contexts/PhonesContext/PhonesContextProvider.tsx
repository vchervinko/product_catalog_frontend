import { FC, ReactNode, memo } from 'react';
import { Props as PhoneContextProps, PhonesContext } from './PhonesContext';

interface Props {
  children: ReactNode;
}

const value: PhoneContextProps = {
  total: 15,
  limit: 2,
};

export const PhonesContextProvider: FC<Props> = memo(
  ({ children }) => (
    <PhonesContext.Provider value={value}>
      {children}
    </PhonesContext.Provider>
  ),
);
