import { createContext } from 'react';
import { PhonesContextProps } from './Props';

export const PhonesContext = createContext<PhonesContextProps>({
  total: 0,
  limit: 0,
});
