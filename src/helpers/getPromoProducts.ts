import { Product } from '../types/Product';

export const getPromoProducts = (products: Product[]): Product[] => products
  .filter((product: Product) => product.fullPrice > product.price);
