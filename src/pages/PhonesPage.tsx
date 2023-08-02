import { FC, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';
import { Product } from '../types/Product';

//TODO: replace this with a call to the API
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

  useEffect(() => {
    setProducts(products);
  }, []);

  return (
    <PageLayout title="Mobile phones"/>
  );
};

export default PhonesPage;
