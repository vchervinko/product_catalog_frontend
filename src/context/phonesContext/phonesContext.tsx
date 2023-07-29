import { createContext } from 'react';

export interface PhonesContextProps {
  total: number;
}

export const PhonesContext = createContext({
  total: 0,
  limit: 0,
});
