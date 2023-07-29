import { createContext } from 'react';
import { PhonesContextProps } from './props';

export const PhonesContext = createContext<PhonesContextProps>({
  total: 0,
  limit: 0,
});
