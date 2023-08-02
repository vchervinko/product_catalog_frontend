import { FC } from 'react';
import { Container } from '../Container';
import { ProductCatalog } from '../ProductCatalog';
import './PageLayout.scss';
import { Pagination } from '../Pagination';
import { Breadcrumbs } from '../Breadcrumbs';
import { ProductCatalogForm } from '../ProductCatalogForm';

interface Props {
  title: string;
}

export const PageLayout: FC<Props> = ({ title }) => {
  return (
    <Container>
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
    </Container>
  );
};
