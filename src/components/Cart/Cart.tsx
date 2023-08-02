import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import { BASE_URL } from '../../helpers/fetchClient';
import { Product } from '../../types/Product';
import { Icon } from '../Icon';
import './Cart.scss';

export const Cart: FC = () => {
  const [cartItems, setCartItems] = useState<{ [id: string]: number }>({});

  const { cart, deleteProductFromCart } = useProductsContext();

  const navigate = useNavigate();

  const decrementQuantity = (id: string, increment: number) => {
    setCartItems((currentItems) => {
      const currentQuantity = currentItems[id] || 1;
      const newQuantity = Math.max(currentQuantity + increment, 1);

      return { ...currentItems, [id]: newQuantity };
    });
  };

  const calculateItemPrice = (product: Product) => {
    const quantity = cartItems[product.id] || 1;

    return product.price * quantity;
  };

  const goBack = () => {
    navigate(-1);
  };

  const totalPrice = cart.reduce((total, product) => (
    total + calculateItemPrice(product)), 0
  );

  const totalItems = cart.reduce((total, product) => (
    total + (cartItems[product.id] || 1)), 0
  );

  return (
    <section className="Cart">
      <button className="Cart__button" onClick={goBack}>
        <div className="Cart__go-back-button" />

        Back
      </button>

      <h2 className="Cart__title">Cart</h2>

      <div className="Cart__content">
        {cart.length === 0
          ? (
            <h2 className="Cart__empty-message">
              Cart is empty now
            </h2>
          )
          : (
            <div className="Cart__list">
              {cart.map((product) => {
                const quantity = cartItems[product.id] || 1;
                const itemPrice = calculateItemPrice(product);

                return (
                  <div className="Cart__item" key={product.id}>
                    <div className="Cart__row">
                      <button
                        className="Cart__close-button"
                        onClick={() => deleteProductFromCart(product)}
                      />

                      <img
                        src={`${BASE_URL}/${product.image}`}
                        alt={product.name}
                        className="Cart__image"
                      />

                      <p className="Cart__description">
                        {product.name}
                      </p>
                    </div>

                    <div className="Cart__row">
                      <div className="Cart__quantity-selector">
                        <button
                          onClick={() => {
                            decrementQuantity(String(product.id), -1);
                          }}
                        >
                          <Icon size={32} type="minus" />
                        </button>

                        <span className="Cart__quantity">{quantity}</span>

                        <button
                          onClick={() => {
                            decrementQuantity(String(product.id), 1);
                          }}
                        >
                          <Icon size={32} type="plus" />
                        </button>
                      </div>

                      <p className="Cart__price">
                        {itemPrice}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        {cart.length > 0 && (
          <div className="Cart__checkout">
            <p className="Cart__total-price">
              ${totalPrice}
            </p>

            <p className="Cart__total">
              Total for {totalItems} items
            </p>

            <button className="Cart__checkout-button">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
