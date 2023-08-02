import { FC } from 'react';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';

const PhonesPage: FC = () => (
  <main>
    Mobile phones

    <ProductCard product={{id: 5}}/>

    <Pagination />
  </main>
);

export default PhonesPage;
