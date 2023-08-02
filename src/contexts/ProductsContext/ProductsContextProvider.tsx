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
  }, [cart]);

  const deleteProductFromCart = useCallback((product: Product) => {
    setCart((currentCart: Product[]) =>
      currentCart.filter((item) => item.id !== product.id)
    );
  }, []);

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
    total: 64,
    limit: 16,
    cart,
    likedProducts,
    products,
    setProducts,
    cartProductsCount: cart.length,
    likedProductsCount: likedProducts.length,
    addProductToCart,
    deleteProductFromCart,
    toggleLikeProduct,

  }), [products, cart, likedProducts]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
});
