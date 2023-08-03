import { createContext } from 'react';
import { Product } from '../../types/Product';

export interface Props {
  total: number,
  limit: number,
  products: Product[],
  cart: Product[],
  likedProducts: Product[],
  cartProductsCount: number,
  likedProductsCount: number,
  addProductToCart: (product: Product) => void,
  deleteProductFromCart: (productId: number) => void,
  toggleLikeProduct: (product: Product) => void,
  setProducts: (products: Product[]) => void,
}

export const ProductsContext = createContext<Props>({
  total: 0,
  limit: 0,
  products: [],
  cart: [],
  likedProducts: [],
  cartProductsCount: 0,
  likedProductsCount: 0,
  addProductToCart: () => {/* empty */},
  deleteProductFromCart: () => {/* empty */},
  toggleLikeProduct: () => { /* empty */ },
  setProducts: () => {/* empty */},
});
