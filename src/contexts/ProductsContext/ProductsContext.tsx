import { createContext } from 'react';
import { Product } from '../../types/Product';

export interface Props {
  total: number,
  limit: number,
  cart: Product[]
  likedProducts: Product[],
  addProductToCart: (product: Product) => void,
  toggleLikeProduct: (product: Product) => void,
}

export const ProductsContext = createContext<Props>({
  total: 0,
  limit: 0,
  cart: [],
  likedProducts: [],
  addProductToCart: () => {/* empty */},
  toggleLikeProduct: () => { /* empty */ },
});
