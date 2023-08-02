import { createContext } from 'react';
import { Product } from '../../types/Product';

export interface Props {
  total: number,
  limit: number,
  products: Product[],
  setProducts: (products: Product[]) => void,
  cart: Product[],
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
  products: [],
  setProducts: () => {/* empty */},
  likedProductsCount: 0,
  cartProductsCount: 0,
  cart: [],
  likedProducts: [],
  addProductToCart: () => {/* empty */},
  deleteProductFromCart: () => {/* empty */},
  toggleLikeProduct: () => { /* empty */ },
});
