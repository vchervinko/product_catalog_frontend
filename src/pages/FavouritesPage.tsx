import { FC } from 'react';
import { PageLayout } from '../components/PageLayout';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const FavouritesPage: FC = () => {
  const { likedProducts } = useProductsContext();

  return (
    <PageLayout
      title="Favourites"
      data={likedProducts}
      hasControls={false}
    />
  );
};

export default FavouritesPage;
