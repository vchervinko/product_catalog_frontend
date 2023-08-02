import { FC } from 'react';
import { ProductsContextProvider } from '../contexts/ProductsContext/ProductsContextProvider';
import { PageLayout } from '../components/PageLayout';

const PhonesPage: FC = () => (
  <ProductsContextProvider>
    <main>
      <PageLayout title="Mobile phones"/>
    </main>
  </ProductsContextProvider>
);

export default PhonesPage;
