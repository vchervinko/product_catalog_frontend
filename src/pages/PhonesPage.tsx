import { FC, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router';
import { getPhones } from '../api/phones';
import { PageLayout } from '../components/PageLayout';
import { useErrorContext } from '../contexts/ErrorContext/useErrorContext';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const PhonesPage: FC = () => {
  const { setProducts, setIsLoaded } = useProductsContext();
  const { setError, clearError } = useErrorContext();

  const { search } = useLocation();

  useEffect(() => {
    document.title = 'Phones | Nice Gadgets';
  }, []);

  const loadPhones = useCallback(async () => {
    try {
      clearError();
      setIsLoaded(false);

      const phonesFromServer = await getPhones();

      setProducts(phonesFromServer);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsLoaded(true);
    }
  }, [setProducts, setIsLoaded, setError, clearError]);

  useEffect(() => {
    loadPhones();
  }, [search, loadPhones]);

  return (
    <PageLayout title="Mobile phones" loadData={loadPhones} />

  );
};

export default PhonesPage;
