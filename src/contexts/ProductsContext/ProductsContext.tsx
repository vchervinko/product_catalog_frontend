import { createContext } from 'react';
import { Product } from '../../types/Product';

export interface Props {
  total: number,
  limit: number,
  likedProductsCount: number,
  cartProductsCount: number,
  cart: Product[]
  likedProducts: Product[],
  addProductToCart: (product: Product) => void,
  toggleLikeProduct: (product: Product) => void,
}

export const ProductsContext = createContext<Props>({
  total: 0,
  limit: 0,
  likedProductsCount: 0,
  cartProductsCount: 0,
  cart: [],
  likedProducts: [],
  addProductToCart: () => {/* empty */},
  toggleLikeProduct: () => { /* empty */ },
});
