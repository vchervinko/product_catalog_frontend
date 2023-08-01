import { FC, memo } from 'react';
import { useNavigate } from 'react-router';
import cardImage from '../../assets/images/category-phones.png';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import { Product } from '../../types/Product';
import { findItemById } from '../../utils/collectionsHelper/findItemById';
import { Icon } from '../Icon';
import './ProductCard.scss';

interface ProductCardProps {
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

export const ProductCard: FC<ProductCardProps> = memo((/* { product } */) => {
  const { id, name, fullPrice, price, screen, capacity, ram } = product;

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

  const hasItemInCart = Boolean(findItemById(cart, id));
  const isLiked = Boolean(findItemById(likedProducts, id));

  const likeButtonIcon = isLiked ? 'like-filled' : 'like';

  return (
    <article className="Card">
      <img
        className="Card__image"
        src={cardImage}
        alt={name}
      />

      <h3 className="Card__title">
        {name}
      </h3>

      <section className="Card__prices">
        <h2 className="Card__current-price">
          {price}
        </h2>

        <h2 className="Card__previous-price">
          {fullPrice}
        </h2>
      </section>

      <hr className="Card__divide-line"></hr>

      <ul className="Card__list-specifications">
        <li className="Card__item-specification">
          <p className="Card__item-title-specification">
            Screen
          </p>

          <span className="Card__item-value-specification">
            {screen}
          </span>
        </li>

        <li className="Card__item-specification">
          <p className="Card__item-title-specification">
            Capacity
          </p>

          <span className="Card__item-value-specification">
            {capacity}
          </span>
        </li>

        <li className="Card__item-specification">
          <p className="Card__item-title-specification">
            RAM
          </p>

          <span className="Card__item-value-specification">
            {ram}
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
