import { FC, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router';
import { getAccessories } from '../api/accessories';
import { PageLayout } from '../components/PageLayout';
import { useErrorContext } from '../contexts/ErrorContext/useErrorContext';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const AccessoriesPage: FC = () => {
  const { setProducts, setIsLoaded } = useProductsContext();
  const { setError, clearError } = useErrorContext();

  const { search } = useLocation();

  useEffect(() => {
    document.title = 'Accessories | Nice Gadgets';
  }, []);

  const loadAccessories = useCallback(async () => {
    try {
      clearError();
      setIsLoaded(false);

      const accessoriesFromServer = await getAccessories();

      setProducts(accessoriesFromServer);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsLoaded(true);
    }
  }, [setProducts, setIsLoaded, setError, clearError]);

  useEffect(() => {
    loadAccessories();
  }, [search, loadAccessories]);

  return (
    <PageLayout title="Accessories" loadData={loadAccessories} />
  );
};

export default AccessoriesPage;
