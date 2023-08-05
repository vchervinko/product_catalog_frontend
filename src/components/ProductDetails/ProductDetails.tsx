/* eslint-disable max-len */
import { FC, useState } from 'react';
import './ProductDetails.scss';
import './Flex__Container.scss';
import { ProductInfo } from '../../types/Product';
import cn from 'classnames';
import { Icon } from '../Icon';
import { findItemById } from '../../helpers/findItemById';
import { useNavigate } from 'react-router';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';

const product: ProductInfo = {
  'id': '908432948',
  'namespaceId': 'apple-iphone-13-pro-max',
  'name': 'Apple iPhone 13 Pro Max 1TB Graphite',
  'capacityAvailable': ['128GB', '256GB', '512GB', '1TB'],
  'capacity': '1TB',
  'priceRegular': 1700,
  'priceDiscount': 1540,
  'colorsAvailable': ['graphite', 'gold', 'sierrablue'],
  'color': 'graphite',
  'images': [
    '/src/assets/images/category-phones.png',
    '/src/assets/images/category-phones.png',
    '/src/assets/images/category-phones.png',
    '/src/assets/images/category-phones.png',
  ],
  'description': [
    {
      'title': 'And then was a Pro',
      'text': [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.'
      ]
    },
    {
      'title': 'Camera',
      'text': [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.'
      ]
    },
    {
      'title': 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      'text': [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.'
      ]
    }
  ],
  'screen': '6.1 OLED (Super Retina XDR)',
  'resolution': '2556x1179',
  'processor': 'Apple A16 Bionic',
  'ram': '6GB',
  'camera': '48 Mp + 12 Mp + 12MP + 12Mp',
  'zoom': 'Digital 5x, Optical 2x',
  'cell': ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G']
};

const ProductDetails: FC<{ product: ProductInfo }> = () => {
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacity);
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const colorCodes: Record<string, string> = {
    gold: '#FCDBC1',
    graphite: '#4C4C4C',
    sierrablue: '#69abce',
    spacegray: '#5F7170',
    spaceblack: '#333334',
    midnightgreen: '#004953',
    silver: '#C0C0C0',
  };

  const {
    cart,
    likedProducts,
  } = useProductsContext();

  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/cart');
  };

  const hasItemInCart = Boolean(findItemById(cart, product.id));
  const isLiked = Boolean(findItemById(likedProducts, product.id));

  const likeButtonIcon = isLiked ? 'like-filled' : 'like';

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <article className="product">
      <h1 className="product__title">{product.name}</h1>

      <div className="flex">
        <div className="flex__container">
          <div className="flex__container-image product__img-container">
            <img
              className="product__img"
              src={product.images[selectedImageIndex]}
              alt={`Product Image ${selectedImageIndex + 1}`}
            />
          </div>

          <div className="product__image-selector flex__container-selector--photo">
            <div className="product__image-selector--container">
              <ul className="product__image-selector--list">
                {product.images.map(
                  (image, index) => (
                    <li
                      key={`image-${index}`}
                      className="product__image-selector--item">
                      <button
                        className={cn('product__image-selector--photo-button', {
                          'product__image-selector--photo-button--active': selectedImageIndex === index,
                        })}
                        onClick={() => handleImageClick(index)}
                      >
                        <img
                          className="product__image-selector--photo"
                          src={image}
                          alt={`Product Image ${index + 1}`}
                        />
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="product__details-selector flex__container-selector--details">
            <div className="product__details-selector--container">
              <div className="product__details-selector--titleContainer">
                <span
                  className="product__details-selector--title"
                >
                  Available colors
                </span>
                <span
                  className="product__details-selector--title product__details-selector--title-ID"
                >
                  ID:{product.id}
                </span>
              </div>
              <ul className="product__details-selector--list">
                {product.colorsAvailable.map((color, index) => (
                  <li
                    key={`color-${index}`}
                    className="product__details-selector--item">
                    <div className={cn('product__details-selector--item-button', {
                      'product__details-selector--item-button--active': selectedColor === color,
                    })}
                    >
                      <button
                        className="product__details-selector--color-button"
                        onClick={() => handleColorClick(color)}
                        style={{ backgroundColor: colorCodes[color] }}
                      >
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="decorative-line"></div>

            <div className="product__details-selector">
              <div className="product__details-selector--container">
                <div className="product__details-selector--titleContainer">
                  <span className="product__details-selector--title">
                    Available capacities
                  </span>
                </div>
                <ul className="product__details-selector--list">
                  {product.capacityAvailable.map((capacity, index) => (
                    <li
                      key={`capacity-${index}`}
                      className="product__details-selector--item"
                    >
                      <button
                        className={cn('product__details-selector--capacity-button', {
                          'product__details-selector--capacity-button--active': selectedCapacity === capacity,
                        })}
                        onClick={() => handleCapacityClick(capacity)}
                      >
                        {capacity}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="decorative-line"></div>

            <section className="Card__prices">
              <h2 className="Card__current-price">
                {product.priceDiscount}
              </h2>

              <h2 className="Card__previous-price">
                {product.priceRegular}
              </h2>
            </section>

            <section className="Card__actions product__section-actions">
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
                  >
                    Add to cart
                  </button>
                )}

              <button>
                <Icon size={40} type={likeButtonIcon} />
              </button>
            </section>

            <section className="product__section-techspechs">
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
                    Resolution
                  </p>

                  <span className="Card__item-value-specification">
                    {product.resolution}
                  </span>
                </li>

                <li className="Card__item-specification">
                  <p className="Card__item-title-specification">
                    Processor
                  </p>

                  <span className="Card__item-value-specification">
                    {product.processor}
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
            </section>
          </div>
          <span
            className="product__details-selector--title flex__container-ID"
          >
            ID:{product.id}
          </span>
        </div>
      </div>

    </article>
  );
};

export default ProductDetails;
