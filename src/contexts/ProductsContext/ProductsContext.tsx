import { createContext } from 'react';
import { CartProduct, Product } from '../../types/Product';

export interface Props {
  total: number,
  limit: number,
  cart: CartProduct[],
  products: Product[],
  promoProducts: Product[],
  isLoaded: boolean,
  likedProducts: Product[],
  cartProductsCount: number,
  likedProductsCount: number,
  addProductToCart: (product: Product) => void,
  deleteProductFromCart: (productId: number, fully?: boolean) => void,
  toggleLikeProduct: (product: Product) => void,
  setProducts: (products: Product[]) => void,
  setPromoProducts: (products: Product[]) => void,
  setIsLoaded: (isLoaded: boolean) => void,
}

export const ProductsContext = createContext<Props>({
  total: 0,
  limit: 0,
  products: [],
  promoProducts: [],
  isLoaded: false,
  cart: [],
  likedProducts: [],
  cartProductsCount: 0,
  likedProductsCount: 0,
  addProductToCart: () => {/* empty */},
  deleteProductFromCart: () => {/* empty */},
  toggleLikeProduct: () => { /* empty */ },
  setProducts: () => {/* empty */},
  setPromoProducts: () => {/* empty */},
  setIsLoaded: () => {/* empty */},
});
