import { Product } from '../types/Product';

export const getNewestProducts = (products: Product[]): Product[] => {
  const sortedProducts = products.sort((a, b) => b.year - a.year);

  const newestProducts = sortedProducts.slice(0, 8);

  return newestProducts;
};
