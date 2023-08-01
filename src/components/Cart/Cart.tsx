import { FC, useState } from 'react';
import './Cart.scss';
import { Icon } from '../Icon';
import { Phone, Product } from '../types/Product';
import zatychka from '../../assets/img/phones/apple-iphone-13-mini/midnight/00.webp';

// eslint-disable-next-line max-len
const phonesInCart: Phone[] = [{'id': '1', 'category': 'phones', 'phoneId': 'apple-iphone-7-32gb-black', 'itemId': 'apple-iphone-7-32gb-black', 'name': 'Apple iPhone 7 32GB Black', 'fullPrice': 400, 'price': 375, 'screen': '4.7\' IPS', 'capacity': '32GB', 'color': 'black', 'ram': '2GB', 'year': 2016, 'image': 'img/phones/apple-iphone-7/black/00.jpg'}, {'id': '2', 'category': 'phones', 'phoneId': 'apple-iphone-7-plus-32gb-black', 'itemId': 'apple-iphone-7-plus-32gb-black', 'name': 'Apple iPhone 7 Plus 32GB Black', 'fullPrice': 540, 'price': 500, 'screen': '5.5\' IPS', 'capacity': '32GB', 'color': 'black', 'ram': '3GB', 'year': 2016, 'image': 'img/phones/apple-iphone-7-plus/black/00.jpg'}, {'id': '3', 'category': 'phones', 'phoneId': 'apple-iphone-8-64gb-gold', 'itemId': 'apple-iphone-8-64gb-gold', 'name': 'Apple iPhone 8 64GB Gold', 'fullPrice': 600, 'price': 550, 'screen': '4.7\' IPS', 'capacity': '64GB', 'color': 'gold', 'ram': '2GB', 'year': 2017, 'image': 'img/phones/apple-iphone-8/gold/00.jpg'}, {'id': '58', 'category': 'phones', 'phoneId': 'apple-iphone-11-pro-max-256gb-silver', 'itemId': 'apple-iphone-11-pro-max-256gb-silver', 'name': 'Apple iPhone 11 Pro Max 256GB Silver', 'fullPrice': 1776, 'price': 1680, 'screen': '6.5\' OLED', 'capacity': '256GB', 'color': 'silver', 'ram': '4GB', 'year': 2019, 'image': 'img/phones/apple-iphone-11-pro-max/silver/00.jpg'}, {'id': '59', 'category': 'phones', 'phoneId': 'apple-iphone-11-pro-max-512gb-midnightgreen', 'itemId': 'apple-iphone-11-pro-max-512gb-midnightgreen', 'name': 'Apple iPhone 11 Pro Max 512GB Midnightgreen', 'fullPrice': 2020, 'price': 1930, 'screen': '6.5\' OLED', 'capacity': '512GB', 'color': 'midnightgreen', 'ram': '4GB', 'year': 2019, 'image': 'img/phones/apple-iphone-11-pro-max/midnightgreen/00.jpg'}, {'id': '60', 'category': 'phones', 'phoneId': 'apple-iphone-xr-128gb-yellow', 'itemId': 'apple-iphone-xr-128gb-yellow', 'name': 'Apple iPhone XR 128GB Yellow', 'fullPrice': 880, 'price': 815, 'screen': '6.1\' IPS', 'capacity': '128GB', 'color': 'yellow', 'ram': '3GB', 'year': 2018, 'image': 'img/phones/apple-iphone-xr/yellow/00.jpg'}];

interface CartProps {
  products: Product[];
}

export const Cart: FC<CartProps> = ({ products = phonesInCart }) => {
  const [cartItems, setCartItems] = useState<{ [id: string]: number }>({});

  const changeQuantity = (phoneId: string, increment: number) => {
    setCartItems((prevItems) => {
      const currentQuantity = prevItems[phoneId] || 1;
      const newQuantity = Math.max(currentQuantity + increment, 1);

      return { ...prevItems, [phoneId]: newQuantity };
    });
  };

  const calculateItemPrice = (product: Product) => {
    const quantity = cartItems[product.id] || 1;

    return product.price * quantity;
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const totalPrice = products.reduce(
    (acc, product) => acc + calculateItemPrice(product),
    0
  );

  const totalItems = products.reduce(
    (acc, product) => acc + (cartItems[product.id] || 1),
    0
  );

  return (
    <section className="cart">
      <button onClick={handleGoBack} className="cart__button">
        <div className="cart__goBackButton" />
        Back
      </button>

      <p className="cart__title">Cart</p>

      <div className="cart__content">
        <div className="cart__itemsList">
          {products.map((product) => {
            const quantity = cartItems[product.id] || 1;

            return (
              <div className="cart__item" key={product.id}>
                <div className="cart__row">
                  <button
                    className="cart__closeButton"
                  ></button>

                  <picture>
                    <img
                      src={zatychka}
                      alt="zatychka"
                      className="cart__image"
                    />
                  </picture>

                  <p className="cart__description">{product.name}</p>
                </div>

                <div className="cart__row">
                  <div className="cart__quantitySelector">
                    <button onClick={() => changeQuantity(product.id, -1)}>
                      <Icon size={32} type="minus" />
                    </button>

                    <span className="cart__quantity">{quantity}</span>

                    <button onClick={() => changeQuantity(product.id, 1)}>
                      <Icon size={32} type="plus" />
                    </button>
                  </div>

                  <p className="cart__price">
                    ${calculateItemPrice(product)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart__checkout">
          <p className="cart__checkoutPrice">
            ${totalPrice}
          </p>

          <p className="cart__total">
            Total for {totalItems} items
          </p>

          <button className="cart__checkoutButton">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};
