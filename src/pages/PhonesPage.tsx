import { FC } from 'react';
import { Container } from '../components/Container';
import { Pagination } from '../components/Pagination';
import { PhonesContextProvider } from '../contexts/PhonesContext/PhonesContextProvider';

const PhonesPage: FC = () => (
  <PhonesContextProvider>
    <main>
      <Container>
        Mobile phones

        <Pagination />
      </Container>
    </main>
  </PhonesContextProvider>
);

export default PhonesPage;
