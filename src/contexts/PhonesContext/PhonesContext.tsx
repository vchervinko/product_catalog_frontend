import { createContext } from 'react';
import { Product } from '../../types/Product';

export interface Props {
  total: number,
  limit: number,
  cart: Product[]
  addProductToCart: (product: Product) => void,
  likedProducts: Product[],
  toggleLikeProduct: (product: Product) => void,
}

export const PhonesContext = createContext<Props>({
  total: 0,
  limit: 0,
  cart: [],
  addProductToCart: () => {/* empty */},
  likedProducts: [],
  toggleLikeProduct: () => { /* empty */ },
});
