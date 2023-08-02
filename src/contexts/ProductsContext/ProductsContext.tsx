import { createContext } from 'react';
import { Product } from '../../types/Product';

export interface Props {
  total: number,
  limit: number,
  cart: Product[]
  likedProducts: Product[],
  cartProductsCount: number,
  likedProductsCount: number,
  addProductToCart: (product: Product) => void,
  deleteProductFromCart: (product: Product) => void,
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
  deleteProductFromCart: () => {/* empty */},
  toggleLikeProduct: () => { /* empty */ },
});
