import { FC, ReactNode, memo, useCallback, useMemo, useState } from 'react';
import { Props as PhoneContextProps, PhonesContext } from './PhonesContext';
import { Product } from '../../types/Product';
import { findItemById } from '../../utils/collectionsHelper/findItemById';

interface Props {
  children: ReactNode;
}

export const PhonesContextProvider: FC<Props> = memo(({ children }) => {

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

  const value: PhoneContextProps = useMemo(() => ({
    total: 15,
    limit: 2,
    cart,
    addProductToCart,
    likedProducts,
    toggleLikeProduct,

  }), [cart, likedProducts]);

  return (
    <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
  );
});
