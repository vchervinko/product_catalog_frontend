import { FC } from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Pagination } from '../Pagination';
import { ProductCatalog } from '../ProductCatalog';
import { ProductCatalogForm } from '../ProductCatalogForm';
import './PageLayout.scss';

interface Props {
  title: string;
}

export const PageLayout: FC<Props> = ({ title }) => {
  return (
    <div className="PageLayout">
      <section className="PageLayout__breadcrumbs">
        <Breadcrumbs />
      </section>

      <h1 className="PageLayout__title">{title}</h1>

      <section className="PageLayout__actions">
        <ProductCatalogForm />
      </section>

      <section className="PageLayout__catalog">
        <ProductCatalog />
      </section>

      <section className="PageLayout__pagination">
        <Pagination />
      </section>
    </div>
  );
};
