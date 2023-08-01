import { FC } from 'react';
import { Container } from '../components/Container';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';
import { ProductsContextProvider } from '../contexts/ProductsContext/ProductsContextProvider';

const PhonesPage: FC = () => (
  <ProductsContextProvider>
    <main>
      <Container>
        Mobile phones

        <ProductCard product={{id: 5}}/>
        <Pagination />
      </Container>
    </main>
  </ProductsContextProvider>
);

export default PhonesPage;
