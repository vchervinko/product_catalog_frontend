import { FC } from 'react';
import { Pagination } from '../components/Pagination';
import { PhonesContextProvider } from '../contexts/PhonesContext/PhonesContextProvider';

const PhonesPage: FC = () => (
  <PhonesContextProvider>
    <main>
      Phones Page

      <Pagination />
    </main>
  </PhonesContextProvider>
);

export default PhonesPage;
