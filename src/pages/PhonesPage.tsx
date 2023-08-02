import { FC, useEffect } from 'react';
import { ProductsContextProvider } from '../contexts/ProductsContext/ProductsContextProvider';
import { PageLayout } from '../components/PageLayout';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';
import { Product } from '../types/Product';
import { Outlet, useLocation } from 'react-router';

const products: Product[] = [
  { id: 1},
  { id: 2},
  { id: 3},
  { id: 4},
  { id: 5},
  { id: 6},
  { id: 7},
  { id: 8},
  { id: 9},
];

const PhonesPage: FC = () => {
  const { setProducts } = useProductsContext();
  const location = useLocation();
  
  const isPhoneDetailsPage = location.pathname.startsWith('/phones/');

  useEffect(() => {
    console.log(products);
    setProducts(products);
  }, []);

  return (
    <ProductsContextProvider>
      <main>
        {!isPhoneDetailsPage && <PageLayout title="Mobile phones"/>}
        <Outlet />
      </main>
    </ProductsContextProvider>
  );
};

export default PhonesPage;
