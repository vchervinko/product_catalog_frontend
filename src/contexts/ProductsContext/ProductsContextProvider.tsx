import { FC, ReactNode, memo, useCallback, useMemo, useState } from 'react';
import { calculateQuantity } from '../../helpers/calculateQuantity';
import { findItemById } from '../../helpers/findItemById';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CartProduct, Product } from '../../types/Product';
import { Props as ProductContextProps, ProductsContext } from './ProductsContext';

interface Props {
  children: ReactNode;
}

export const ProductsContextProvider: FC<Props> = memo(({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useLocalStorage<CartProduct[]>('cart', []);
  const [likedProducts, setLikedProducts] = useLocalStorage<Product[]>(
    'liked',
    [],
  );

  const addProductToCart = useCallback((product: Product) => {
    setCart((currentCart: CartProduct[]) => {
      const foundProduct = findItemById(currentCart, product.id);

      if (foundProduct) {
        return currentCart.map((item) => item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }, [setCart]);

  const deleteProductFromCart = useCallback((
    productId: number,
    fully: boolean = false,
  ) => {
    setCart((currentCart: CartProduct[]) => {
      return currentCart.map((item) => {
        if (item.id === productId) {
          return fully || item.quantity === 1
            ? null
            : { ...item, quantity: item.quantity - 1 };
        }

        return item;
      }).filter(Boolean);
    });
  }, [setCart]);

  const setProductQuantity = useCallback((
    productId: number,
    quantity: number,
  ) => {
    setCart((currentCart: CartProduct[]) => {
      return currentCart.map((item) => item.id === productId
        ? { ...item, quantity }
        : item,
      );
    });
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
    isLoaded,
    cartProductsCount: calculateQuantity(cart),
    likedProductsCount: likedProducts.length,
    addProductToCart,
    deleteProductFromCart,
    toggleLikeProduct,
    setProducts,
    setProductQuantity,
    setIsLoaded,
  }), [
    cart,
    likedProducts,
    products,
    isLoaded,
    addProductToCart,
    deleteProductFromCart,
    toggleLikeProduct,
    setProductQuantity,
  ]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
});
