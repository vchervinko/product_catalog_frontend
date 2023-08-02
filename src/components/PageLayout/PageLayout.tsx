import { FC } from 'react';
import { Container } from '../Container';
import { ProductCatalog } from '../ProductCatalog';
import './PageLayout.scss';
import { Pagination } from '../Pagination';
import { Breadcrumbs } from '../Breadcrumbs';
import { ProductCatalogForm } from '../ProductCatalogForm';

interface PageLayoutProps {
  title: string
}

export const PageLayout: FC<PageLayoutProps> = ({ title }) => {
  return (
    <Container>
      <section className="page__breadcrumbs">
        <Breadcrumbs />
      </section>

      <h1 className="page__title">{title}</h1>

      <section className="page__actions">
        <ProductCatalogForm />
      </section>

      <section className="page__catalog">
        <ProductCatalog />
      </section>

      <section className="page__pagination">
        <Pagination />
      </section>
    </Container>
  );
};
