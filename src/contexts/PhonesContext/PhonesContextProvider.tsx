import { FC, memo } from 'react';
import { PhonesContextProps } from '../../types/PhonesContextProps';
import { ReactNodeProps } from '../../types/ReactNodeProps';
import { PhonesContext } from './PhonesContext';

const value: PhonesContextProps = {
  total: 15,
  limit: 2,
};

export const PhonesContextProvider: FC<ReactNodeProps> = memo(
  ({ children }) => {
    return (
      <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
    );
  },
);
