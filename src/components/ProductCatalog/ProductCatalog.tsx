import './ProductCatalog.scss';
import { ProductCard } from '../ProductCard';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';

export const ProductCatalog = () => {

  const { products } = useProductsContext();
  console.log(products);

  return (
    <section className="ProductCatalog">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>

  );
};
