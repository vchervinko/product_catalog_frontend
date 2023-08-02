import { FC } from 'react';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';
import { Outlet, useLocation } from 'react-router';

const PhonesPage: FC = () => {
  const location = useLocation();

  const isPhoneDetailsPage = location.pathname.startsWith('/phones/');

  return (
    <main>
      Mobile phones

      {!isPhoneDetailsPage && <ProductCard product={{ id: 5 }} />}

      {!isPhoneDetailsPage && <Pagination />}

      <Outlet />
    </main>
  );
};

export default PhonesPage;
