/* eslint-disable max-len */
import classNames from 'classnames';
import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getProductByDetails } from '../../api/product';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import { capitalize } from '../../helpers/capitalize';
import { colorCodes } from '../../helpers/constants/colorCodes';
import { techSpecOptions } from '../../helpers/constants/techSpecOptions';
import { findItemById } from '../../helpers/findItemById';
import { normalizeCapacity } from '../../helpers/normalizeCapacity';
import { Product, ProductInfo } from '../../types/Product';
import { Icon } from '../Icon';
import './ProductDetails.scss';
import 'swiper/scss/thumbs';

interface Props {
  product: ProductInfo;
}

export const ProductDetails: FC<Props> = ({ product: firstProduct }) => {
  const [product, setProduct] = useState<ProductInfo>(firstProduct);
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacity);
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const preparedProduct: Product = {
    id: product.itemId,
    name: product.name,
    fullPrice: product.fullPrice,
    price: product.price,
    image: product.images[0],
    category: product.category,
    capacity: product.capacity,
    screen: product.screen,
    ram: product.ram,
    itemId: product.id,
  };

  const {
    cart,
    likedProducts,
    addProductToCart,
    toggleLikeProduct,
  } = useProductsContext();

  const navigate = useNavigate();

  const loadProduct = useCallback(async () => {
    try {
      const newProduct = await getProductByDetails(
        product.namespaceId,
        product.category,
        selectedColor,
        selectedCapacity,
      );

      setProduct(newProduct);
      navigate(
        `/${newProduct.category}/${newProduct.id}`,
        { replace: true },
      );

    } catch (error) {
      console.error(error);
    }
  }, [
    product.namespaceId,
    product.category,
    selectedColor,
    selectedCapacity,
    navigate,
  ]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const hasItemInCart = Boolean(findItemById(cart, product.itemId));
  const isLiked = Boolean(findItemById(likedProducts, product.itemId));

  const likeButtonIcon = isLiked ? 'like-filled' : 'like';

  return (
    <article className="ProductDetails">
      <h1 className="ProductDetails__title">
        {product.name}
      </h1>

      <section className="ProductDetails__content">
        <span className="ProductDetails__product-id">
          Id: {product.itemId}
        </span>

        <Swiper
          className="ProductDetails__slider"
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {product.images.map((image) => (
            <SwiperSlide key={image} className="ProductDetails__slide">
              <img
                className="ProductDetails__image"
                src={`https://apple-catalog-api.onrender.com/${image}`}
                alt={product.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          className="ProductDetails__thumbs"
          modules={[Thumbs]}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onSwiper={setThumbsSwiper as any}
          watchSlidesProgress
          slidesPerView={4}
        >
          {product.images.map((image) => (
            <SwiperSlide key={image} className="ProductDetails__thumb">
              <img
                className="ProductDetails__image"
                src={`https://apple-catalog-api.onrender.com/${image}`}
                alt={product.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ProductDetails__info">
          <div className="ProductDetails__colors">
            <span className="ProductDetails__colors-title">
              Available colors
            </span>

            <ul className="ProductDetails__colors-list">
              {product.colorsAvailable.map((color) => (
                <li key={color} className="ProductDetails__colors-item">
                  <button
                    className={classNames('ProductDetails__colors-button', {
                      'ProductDetails__colors-button--active': color === selectedColor,
                    })}
                    onClick={() => handleColorClick(color)}
                  >
                    <div
                      className="ProductDetails__colors-color"
                      style={{ backgroundColor: colorCodes[color.toLowerCase()] }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="ProductDetails__divider"
            style={{ marginBottom: '24px' }}
          />

          <div className="ProductDetails__capacity">
            <span className="ProductDetails__capacity-title">
              Select capacity
            </span>

            <ul className="ProductDetails__capacity-list">
              {product.capacityAvailable.map((capacity) => (
                <li key={capacity} className="ProductDetails__capacity-item">
                  <button
                    className={classNames('ProductDetails__capacity-button', {
                      'ProductDetails__capacity-button--active': capacity === selectedCapacity,
                    })}
                    onClick={() => handleCapacityClick(capacity)}
                  >
                    {normalizeCapacity(capacity)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="ProductDetails__divider"
            style={{ marginBottom: '32px' }}
          />

          <div className="ProductDetails__pricing">
            <p className="ProductDetails__price">
              {product.price}
            </p>

            <span className="ProductDetails__full-price">
              {product.fullPrice}
            </span>
          </div>

          <div className="ProductDetails__actions">
            {hasItemInCart
              ? (
                <button
                  className="
                    ProductDetails__actions-button
                    ProductDetails__actions-button--added"
                  onClick={() => navigate('/cart')}
                >
                  Added to cart
                </button>
              )
              : (
                <button
                  className="
                    ProductDetails__actions-button
                    ProductDetails__actions-button--add
                  "
                  onClick={() => addProductToCart(preparedProduct)}
                >
                  Add to cart
                </button>
              )}

            <button
              className="
                ProductDetails__actions-button
                ProductDetails__actions-button--like"
              onClick={() => toggleLikeProduct(preparedProduct)}
            >
              <Icon size={48} type={likeButtonIcon} />
            </button>
          </div>

          <ul className="ProductDetails__specs-list">
            {techSpecOptions.map((key) => {
              const value = product[key];

              return (
                <li key={key} className="ProductDetails__specs-item">
                  <p className="ProductDetails__specs-title">
                    {capitalize(key)}
                  </p>

                  <span className="ProductDetails__specs-text">
                    {Array.isArray(value)
                      ? value.join(', ')
                      : value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </article>
  );
};
