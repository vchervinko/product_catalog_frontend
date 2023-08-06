import { FC, useCallback, useEffect } from 'react';
import { getPhones } from '../api/phones';
import { Main } from '../components/Main';
import { useErrorContext } from '../contexts/ErrorContext/useErrorContext';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';
import { getNewestProducts } from '../helpers/getNewestProducts';
import { getPromoProducts } from '../helpers/getPromoProducts';

const MainPage: FC = () => {
  const { setProducts, setPromoProducts, setIsLoaded } = useProductsContext();
  const { setError, clearError } = useErrorContext();

  useEffect(() => {
    document.title = 'Nice Gadgets';
  }, []);

  const loadNewModels = useCallback(async () => {
    try {
      clearError();
      setIsLoaded(false);

      const productsFromServer = await getPhones(); //<---- fix

      const newest = getNewestProducts(productsFromServer);
      const promo = getPromoProducts(productsFromServer);

      setProducts(newest);
      setPromoProducts(promo);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsLoaded(true);
    }
  }, [setProducts, setPromoProducts, setIsLoaded, setError, clearError]);

  useEffect(() => {
    loadNewModels();
  }, [loadNewModels]);

  return (
    <Main />
  );
};

export default MainPage;
