import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import { ProductCard } from '../ProductCard';
import './ProductCatalog.scss';

export const ProductCatalog = () => {
  const { products } = useProductsContext();

  return (
    <section className="ProductCatalog">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
