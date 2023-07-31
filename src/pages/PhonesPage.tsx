import { FC } from 'react';
import { PhonesContextProvider } from '../context/PhonesContext/PhonesContextProvider';
import { Pagination } from '../components/Pagination';

const PhonesPage: FC = () => (
  <PhonesContextProvider>
    <main>Phones Page</main>
    <Pagination />
  </PhonesContextProvider>
);

export default PhonesPage;
