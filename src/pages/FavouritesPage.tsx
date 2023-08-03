import { FC, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { useProductsContext } from '../contexts/ProductsContext/useProductsContext';

const FavouritesPage: FC = () => {
  const { likedProducts } = useProductsContext();

  useEffect(() => {
    document.title = 'Nice Gadgets | Favourites';
  }, []);

  return (
    <PageLayout
      title="Favourites"
      data={likedProducts}
      hasControls={false}
    />
  );
};

export default FavouritesPage;
