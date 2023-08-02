import { FC, memo } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import { BASE_URL } from '../../helpers/fetchClient';
import { findItemById } from '../../helpers/findItemById';
import { Product } from '../../types/Product';
import { Icon } from '../Icon';
import './ProductCard.scss';

interface Props {
  product: Product;
}

// TODO: replace this mock with real data
const product = {
  'id': 120,
  'category': 'phones',
  'itemId': 'apple-iphone-13-pro-max-1tb-graphite',
  'name': 'Apple iPhone 13 Pro Max 1TB Graphite',
  'fullPrice': 1740,
  'price': 1520,
  'screen': '6.1\' OLED',
  'capacity': '1TB',
  'color': 'graphite',
  'ram': '6GB',
  'year': 2022,
  'image': 'img/phones/apple-iphone-13-pro-max/graphite/00.webp',
};

export const ProductCard: FC<Props> = memo((/* { product } */) => {
  const {
    cart,
    likedProducts,
    addProductToCart,
    toggleLikeProduct,
  } = useProductsContext();

  const navigate = useNavigate();

  const addToCart = () => {
    addProductToCart(product);
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  const likeProduct = () => {
    toggleLikeProduct(product);
  };

  const hasItemInCart = Boolean(findItemById(cart, product.id));
  const isLiked = Boolean(findItemById(likedProducts, product.id));

  const likeButtonIcon = isLiked ? 'like-filled' : 'like';

  return (
    <article className="Card">
      <Link to={`/${product.category}/${product.id}`}>
        <img
          className="Card__image"
          src={`${BASE_URL}/${product.image}`}
          alt={product.name}
        />

        <h3 className="Card__title">
          {product.name}
        </h3>
      </Link>

      <section className="Card__prices">
        <h2 className="Card__current-price">
          {product.price}
        </h2>

        <h2 className="Card__previous-price">
          {product.fullPrice}
        </h2>
      </section>

      <hr className="Card__divide-line"></hr>

      <ul className="Card__list-specifications">
        <li className="Card__item-specification">
          <p className="Card__item-title-specification">
            Screen
          </p>

          <span className="Card__item-value-specification">
            {product.screen}
          </span>
        </li>

        <li className="Card__item-specification">
          <p className="Card__item-title-specification">
            Capacity
          </p>

          <span className="Card__item-value-specification">
            {product.capacity}
          </span>
        </li>

        <li className="Card__item-specification">
          <p className="Card__item-title-specification">
            RAM
          </p>

          <span className="Card__item-value-specification">
            {product.ram}
          </span>
        </li>
      </ul>

      <section className="Card__actions">
        {hasItemInCart
          ? (
            <button
              className="Card__actions-button Card__actions-button--added"
              onClick={navigateToCart}
            >
              Added to cart
            </button>
          )
          : (
            <button
              className="Card__actions-button Card__actions-button--add"
              onClick={addToCart}
            >
              Add to cart
            </button>
          )}

        <button onClick={likeProduct}>
          <Icon size={40} type={likeButtonIcon} />
        </button>
      </section>
    </article>
  );
});
