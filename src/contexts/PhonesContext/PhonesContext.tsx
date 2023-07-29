import { createContext } from 'react';
import { PhonesContextProps } from '../../types/PhonesContextProps';

export const PhonesContext = createContext<PhonesContextProps>({
  total: 0,
  limit: 0,
});
