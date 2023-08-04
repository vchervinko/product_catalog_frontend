import { FC, ReactNode, memo, useCallback, useMemo, useState } from 'react';
import { findItemById } from '../../helpers/findItemById';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Product } from '../../types/Product';
import { Props as ProductContextProps, ProductsContext } from './ProductsContext';

interface Props {
  children: ReactNode;
}

export const ProductsContextProvider: FC<Props> = memo(({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useLocalStorage<Product[]>('cart', []);
  const [likedProducts, setLikedProducts] = useLocalStorage<Product[]>(
    'liked',
    [],
  );

  const addProductToCart = useCallback((product: Product) => {
    setCart((currentCart: Product[]) => [...currentCart, product]);
  }, [setCart]);

  const deleteProductFromCart = useCallback((productId: number) => {
    setCart((currentCart: Product[]) => currentCart.filter(
      ({ id }) => id !== productId,
    ));
  }, [setCart]);

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
  }, [setLikedProducts]);

  const value: ProductContextProps = useMemo(() => ({
    total: 64,
    limit: 16,
    cart,
    likedProducts,
    products,
    cartProductsCount: cart.length,
    likedProductsCount: likedProducts.length,
    addProductToCart,
    deleteProductFromCart,
    toggleLikeProduct,
    setProducts,
  }), [
    cart,
    likedProducts,
    products,
    addProductToCart,
    deleteProductFromCart,
    toggleLikeProduct,
  ]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
});
