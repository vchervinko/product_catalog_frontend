import { FC } from 'react';
import { PhonesContextProvider } from '../context/PhonesContext/PhonesContextProvider';
import { Pagination } from '../components/Pagination';

const PhonesPage: FC = () => {
  return (
    <PhonesContextProvider>
      <main>Phones Page</main>
      <Pagination />
    </PhonesContextProvider>
  );
};

export default PhonesPage;
