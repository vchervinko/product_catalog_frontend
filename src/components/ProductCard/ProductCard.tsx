import classNames from 'classnames';
import './ProductCard.scss';
import { usePhonesContext } from '../../context/PhonesContext/usePhonesContext';
import { FC, memo } from 'react';
import { Product } from '../../types/Product';
import { findItemById } from '../../utils/collectionsHelper/findItemById';

interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = memo(({ product }) => {
  const {
    addProductToCart,
    toggleLikeProduct,
    cart,
    likedProducts,
  } = usePhonesContext();

  const { id } = product;

  const addToCart = () => {
    addProductToCart(product);
  };

  const likeProduct = () => {
    toggleLikeProduct(product);
  };

  const isCartExist = !!findItemById(cart, id);
  const isLiked = !!findItemById(likedProducts, id);

  return (
    <article className="card">
      <img
        src="/src/components/ProductCard/akai.jpg"
        alt="product"
        className="card__image"
      />

      <h3 className="card__title">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h3>

      <section className="card__prices">
        <h2 className="card__current-price">
          $799
        </h2>

        <h2 className="card__prev-price">
          $899
        </h2>
      </section>

      <hr className="card__divide-line"></hr>

      <ul className="card__list-specifications">
        <li className="card__item-specification">
          <p className="card__item-title-specification">screen</p>
          <p className="card__item-value-specification">size</p>
        </li>

        <li className="card__item-specification">
          <p className="card__item-title-specification">screen</p>
          <p className="card__item-value-specification">size</p>
        </li>

        <li className="card__item-specification">
          <p className="card__item-title-specification">screen</p>
          <p className="card__item-value-specification">size</p>
        </li>
      </ul>

      <section className="card__actions">
        <button
          className={classNames('card__actions-add-button', {
            'card__actions-add-button--selected': isCartExist
          })}
          onClick={addToCart}
        >
          {isCartExist ? 'Added' : 'Add to cart'}
        </button>

        <div className="card__icon-container">
          <button
            className={classNames('icon', {
              'icon--like': !isLiked,
              'icon--like-filled': isLiked
            })}
            onClick={likeProduct}
          >

          </button>
        </div>

      </section>
    </article>
  );
});
