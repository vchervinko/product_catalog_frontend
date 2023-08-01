import { FC, ReactNode, memo, useCallback, useMemo } from 'react';
import { findItemById } from '../../helpers/findItemById';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Product } from '../../types/Product';
import { Props as ProductContextProps, ProductsContext } from './ProductsContext';

interface Props {
  children: ReactNode;
}

export const ProductsContextProvider: FC<Props> = memo(({ children }) => {
  const [cart, setCart] = useLocalStorage<Product[]>('cart', []);
  const [likedProducts, setLikedProducts] = useLocalStorage<Product[]>(
    'liked',
    [],
  );

  const addProductToCart = useCallback((product: Product) => {
    setCart((currentCart: Product[]) => [...currentCart, product]);
  }, [cart]);

  const toggleLikeProduct = useCallback((product: Product) => {
    setLikedProducts((currentProducts: Product[]) => {
      const foundProduct = findItemById(currentProducts, product.id);

      if (foundProduct) {
        return currentProducts.filter(likedProduct => (
          likedProduct.id !== product.id
        ));
      }

      return [...currentProducts, product];
    });
  }, [likedProducts]);

  const value: ProductContextProps = useMemo(() => ({
    total: 48,
    limit: 16,
    cart,
    likedProductsCount: likedProducts.length,
    cartProductsCount: cart.length,
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
