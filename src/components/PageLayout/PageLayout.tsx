import { FC } from 'react';
import { useErrorContext } from '../../contexts/ErrorContext/useErrorContext';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import { Breadcrumbs } from '../Breadcrumbs';
import { Error } from '../Error';
import { Loader } from '../Loader';
import { Pagination } from '../Pagination';
import { ProductCatalog } from '../ProductCatalog';
import { ProductFilters } from '../ProductFilters';
import './PageLayout.scss';

interface Props {
  title: string;
  loadData: () => void;
}

export const PageLayout: FC<Props> = ({ title, loadData }) => {
  const { total, products, isLoaded } = useProductsContext();
  const { error } = useErrorContext();

  const shouldShowError = Boolean(error);
  const shouldShowLoader = !error && !isLoaded;
  const shouldShowEmptyMessage = !error && isLoaded && products.length === 0;
  const shouldShowCatalog = !error && isLoaded && products.length > 0;

  return (
    <div className="PageLayout">
      <section className="PageLayout__breadcrumbs">
        <Breadcrumbs />
      </section>

      <h1 className="PageLayout__title">
        {title}
      </h1>

      <ProductFilters />

      {shouldShowError && (
        <div className="PageLayout__error">
          <Error loadData={loadData} />
        </div>
      )}

      {shouldShowCatalog && (
        <div className="PageLayout__models">
          {total} models
        </div>
      )}

      {shouldShowCatalog && (
        <section className="PageLayout__actions">
          <ProductFilters />
        </section>
      )}

      {shouldShowLoader && (
        <span className="PageLayout__loader">
          <Loader size={50} />
        </span>
      )}

      {shouldShowEmptyMessage && (
        <h2 className="PageLayout__empty-message">
          No products found
        </h2>
      )}

      {shouldShowCatalog && (
        <section className="PageLayout__catalog">
          <ProductCatalog products={products} />
        </section>
      )}

      <section className="PageLayout__pagination">
        <Pagination />
      </section>
    </div>
  );
};
