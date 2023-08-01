import { FC } from 'react';
import { Container } from '../components/Container';
import { Pagination } from '../components/Pagination';
import { PhonesContextProvider } from '../contexts/PhonesContext/PhonesContextProvider';
import { ProductCard } from '../components/ProductCard';

const PhonesPage: FC = () => (
  <PhonesContextProvider>
    <main>
      <Container>
        Mobile phones

        <ProductCard product={{id: 5}}/>
        <Pagination />
      </Container>
    </main>
  </PhonesContextProvider>
);

export default PhonesPage;
