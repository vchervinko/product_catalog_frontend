import { FC, useEffect } from 'react';
import { getPhones } from '../api/phones';
import { PageLayout } from '../components/PageLayout';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const PhonesPage: FC = () => {
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    getPhones()
      .then(setProducts);
  }, [setProducts]);

  return (
    <PageLayout title="Mobile phones" data={products}/>
  );
};

export default PhonesPage;
