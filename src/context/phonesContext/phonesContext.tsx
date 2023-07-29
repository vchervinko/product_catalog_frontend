import { createContext } from 'react';

export interface PhonesContextProps {
  countPhones: number;
}

export const PhonesContext = createContext({
  countPhones: 0,
});
