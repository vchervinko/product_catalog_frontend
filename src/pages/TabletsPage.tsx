import { FC, useEffect } from 'react';
import { getTablets } from '../api/tablets';
import { PageLayout } from '../components/PageLayout';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const TabletsPage: FC = () => {
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    document.title = 'Nice Gadgets | Tablets';

    getTablets()
      .then(setProducts);
  }, [setProducts]);

  return (
    <PageLayout title="Tablets" data={products} />
  );
};

export default TabletsPage;
