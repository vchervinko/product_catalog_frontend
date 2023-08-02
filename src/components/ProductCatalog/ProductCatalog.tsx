import './ProductCatalog.scss';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';
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

export const ProductCatalog = () => {
  return (
    <>
      <section className="catalog">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>

  );
};
