import { FC } from 'react';
import { Grid } from '../components/Grid/Grid';
import { TestProduct } from '../components/TestProduct/TestProduct';
import { PhonesContextProvider } from '../context/PhonesContext/PhonesContextProvider';
import { Pagination } from '../components/Pagination';

const PhonesPage: FC = () => {
  const productCount = 24;

  return (
    <PhonesContextProvider>
      <main>Phones Page</main>
      <Pagination />
    </PhonesContextProvider>
  );
};

export default PhonesPage;
