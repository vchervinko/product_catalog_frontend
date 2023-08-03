import { FC } from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Pagination } from '../Pagination';
import { ProductCatalog } from '../ProductCatalog';
import { ProductCatalogForm } from '../ProductCatalogForm';
import './PageLayout.scss';

interface Props {
  title: string;
  hasControls?: boolean;
}

export const PageLayout: FC<Props> = ({ title, hasControls = true }) => {
  return (
    <div className="PageLayout">
      <section className="PageLayout__breadcrumbs">
        <Breadcrumbs />
      </section>

      <h1 className="PageLayout__title">{title}</h1>

      {hasControls && (
        <section className="PageLayout__actions">
          <ProductCatalogForm />
        </section>
      )}

      <section className="PageLayout__catalog">
        <ProductCatalog />
      </section>

      {hasControls && (
        <section className="PageLayout__pagination">
          <Pagination />
        </section>
      )}
    </div>
  );
};
