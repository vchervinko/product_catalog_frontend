import { createContext } from 'react';

export interface Props {
  total: number;
  limit: number;
}

export const PhonesContext = createContext<Props>({
  total: 0,
  limit: 0,
});
