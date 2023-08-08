import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getNewProducts, getProductById } from '../api/product';
import { ProductDetails } from '../components/ProductDetails';
import { useErrorContext } from '../contexts/ErrorContext/useErrorContext';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';
import { Product, ProductInfo } from '../types/Product';
import ProductAbout from '../components/ProductAbout/ProductAbout';
import { Recommendations } from '../components/Recommendations';

const ProductPage = () => {
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [recomendedProducts, setRecomendedProducts] = useState<Product[]>([]);

  const { pathname } = useLocation();

  const { setError, clearError } = useErrorContext();
  const { setIsLoaded } = useProductsContext();

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Nice Gadgets`;

      return;
    }

    document.title = 'Loading... | Nice Gadgets';
  }, [product]);

  const loadProduct = useCallback(async () => {
    try {
      clearError();
      setIsLoaded(false);

      const [, category, id] = pathname.split('/');
      const productFromServer = await getProductById(id, category);

      const [newest] = await Promise.all([getNewProducts()]);

      setProduct(productFromServer);
      setRecomendedProducts(newest);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsLoaded(true);
    }
  }, [pathname, setIsLoaded, setError, clearError]);

  useEffect(() => {
    loadProduct();
  }, [pathname, loadProduct]);

  return (product && (
    <>
      <ProductDetails product={product} />
      <ProductAbout product={product} />
      <Recommendations
        title="You may also like"
        products={recomendedProducts}
      />
    </>
  ));
};

export default ProductPage;
