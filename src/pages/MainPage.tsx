import { FC, useCallback, useEffect } from 'react';
import HomePage from '../components/HomePage/HomePage';
import { getPhones } from '../api/phones';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';
import { useErrorContext } from '../contexts/ErrorContext/useErrorContext';
import { getPromoProducts } from '../helpers/getPromoProducts';
import { getNewestProducts } from '../helpers/getNewestProducts';

const MainPage: FC = () => {
  const { setProducts, setPromoProducts, setIsLoaded } = useProductsContext();
  const { setError, clearError } = useErrorContext();

  useEffect(() => {
    document.title = 'Home | Nice Gadgets';
  }, []);

  const loadNewmodels = useCallback(async () => {
    try {
      clearError();
      setIsLoaded(false);

      const productsFromServer = await getPhones(); //<---- змінити

      const newest = getNewestProducts(productsFromServer);

      setProducts(newest);

      const promo = getPromoProducts(productsFromServer);

      setPromoProducts(promo);

    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsLoaded(true);
    }
  }, [setProducts, setPromoProducts, setIsLoaded, setError, clearError]);

  useEffect(() => {
    loadNewmodels();
  }, [loadNewmodels]);

  return (
    <HomePage />
  );
};

export default MainPage;
