import { FC, useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { PageLayout } from '../components/PageLayout';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const PhonesPage: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { setProducts } = useProductsContext();

  //TODO: swap to getPhones
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => setError(error.message))
      .finally(() => setIsLoaded(true));
  }, []);

  return !error && isLoaded && (
    <PageLayout title="Mobile phones"/>
  );
};

export default PhonesPage;
