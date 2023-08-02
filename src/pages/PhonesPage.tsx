import { FC } from 'react';
import { Container } from '../components/Container';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';

const PhonesPage: FC = () => (
  <main>
    <Container>
      Mobile phones

      <ProductCard product={{id: 5}}/>
      <Pagination />
    </Container>
  </main>
);

export default PhonesPage;
