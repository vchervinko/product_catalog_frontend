import { FC } from 'react';
import { PhonesContextProvider } from '../context/PhonesContext/PhonesContextProvider';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';

const PhonesPage: FC = () => (
  <PhonesContextProvider>
    <main>Phones Page</main>
    <ProductCard product={{id: 5}}/>
    <Pagination />
  </PhonesContextProvider>
);

export default PhonesPage;
