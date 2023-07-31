import { FC } from 'react';
import { Container } from '../components/Container';
import { Pagination } from '../components/Pagination';
import { PhonesContextProvider } from '../contexts/PhonesContext/PhonesContextProvider';

const PhonesPage: FC = () => (
  <PhonesContextProvider>
    <Container>
      <main>
        Mobile phones

        <Pagination />
      </main>
    </Container>
  </PhonesContextProvider>
);

export default PhonesPage;
