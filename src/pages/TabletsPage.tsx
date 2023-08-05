import { FC, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router';
import { getTablets } from '../api/tablets';
import { PageLayout } from '../components/PageLayout';
import { useErrorContext } from '../contexts/ErrorContext/useErrorContext';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const TabletsPage: FC = () => {
  const { setProducts, setIsLoaded } = useProductsContext();
  const { setError, clearError } = useErrorContext();

  const { search } = useLocation();

  useEffect(() => {
    document.title = 'Tablets | Nice Gadgets';
  }, []);

  const loadTablets = useCallback(async () => {
    try {
      clearError();
      setIsLoaded(false);

      const tabletsFromServer = await getTablets();

      setProducts(tabletsFromServer);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsLoaded(true);
    }
  }, [setProducts, setIsLoaded, setError, clearError]);

  useEffect(() => {
    loadTablets();
  }, [search, loadTablets]);

  return (
    <PageLayout title="Tablets" loadData={loadTablets} />
  );
};

export default TabletsPage;
