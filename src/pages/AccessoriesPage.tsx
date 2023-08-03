import { FC, useEffect } from 'react';
import { getAccessories } from '../api/accessories';
import { PageLayout } from '../components/PageLayout';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const AccessoriesPage: FC = () => {
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    document.title = 'Nice Gadgets | Accessories';

    getAccessories()
      .then(setProducts);
  }, [setProducts]);

  return (
    <PageLayout title="Accessories" data={products} />
  );
};

export default AccessoriesPage;
