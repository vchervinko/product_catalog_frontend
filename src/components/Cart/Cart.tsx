import { FC, useState } from 'react';
import './Cart.scss';
import { Icon } from '../Icon';
import { Product } from '../../types/Product';
import { BASE_URL } from '../../helpers/fetchClient';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';

interface CartProps {
  products: Product[];
}

export const Cart: FC<CartProps> = () => {
  const [cartItems, setCartItems] = useState<{ [id: string]: number }>({});
  const { cart, deleteProductFromCart } = useProductsContext();

  const changeQuantity = (id: string, increment: number) => {
    setCartItems((prevItems) => {
      const currentQuantity = prevItems[id] || 1;
      const newQuantity = Math.max(currentQuantity + increment, 1);

      return { ...prevItems, [id]: newQuantity };
    });
  };

  const calculateItemPrice = (product: Product) => {
    const quantity = cartItems[product.id] || 1;

    return product.price * quantity;
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const totalPrice = cart.reduce(
    (acc, product) => acc + calculateItemPrice(product),
    0
  );

  const totalItems = cart.reduce(
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
        {cart.length === 0 ? (
          <p className="cart__emptyMessage">Cart is empty now</p>
        ) : (
          <div className="cart__itemsList">
            {cart.map((product) => {
              const quantity = cartItems[product.id] || 1;

              return (
                <div className="cart__item" key={product.id}>
                  <div className="cart__row">
                    <button
                      className="cart__closeButton"
                      onClick={() => deleteProductFromCart(product)}
                    ></button>

                    <picture>
                      <img
                        src={`${BASE_URL}/${product.image}`}
                        alt={product.name}
                        className="cart__image"
                      />
                    </picture>

                    <p className="cart__description">{product.name}</p>
                  </div>

                  <div className="cart__row">
                    <div className="cart__quantitySelector">
                      <button onClick={() =>
                        changeQuantity(String(product.id), -1)
                      }>
                        <Icon size={32} type="minus" />
                      </button>

                      <span className="cart__quantity">{quantity}</span>

                      <button onClick={() =>
                        changeQuantity(String(product.id), 1)
                      }>
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
        )}

        {cart.length > 0 && (
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
        )}
      </div>
    </section>
  );
};
