import { FC, ReactNode, memo, useCallback, useMemo, useState } from 'react';
import { Product } from '../../types/Product';
import { findItemById } from '../../utils/collectionsHelper/findItemById';
import { Props as ProductContextProps, ProductsContext } from './ProductsContext';

interface Props {
  children: ReactNode;
}

export const ProductsContextProvider: FC<Props> = memo(({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  const addProductToCart = useCallback((product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, [cart]);

  const toggleLikeProduct = useCallback((product: Product) => {
    setLikedProducts((prevLikedProducts) => {
      const foundedProduct = findItemById(prevLikedProducts, product.id);

      if (foundedProduct) {
        return prevLikedProducts
          .filter(likedProduct => likedProduct.id !== product.id);
      }

      return [...prevLikedProducts, product];
    });
  }, [likedProducts]);

  const value: ProductContextProps = useMemo(() => ({
    total: 15,
    limit: 2,
    cart,
    addProductToCart,
    likedProducts,
    toggleLikeProduct,

  }), [cart, likedProducts]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
});
