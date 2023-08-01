import { FC } from 'react';
import './Cart.scss';

export const Cart: FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className="cart">
      <div className="cart__content">
        <button
          onClick={handleGoBack}
          className="cart__button"
        >
          <img src="src\assets\icons\arrow-left-default.svg" />

          Back
        </button>

        <p className="cart__title">
          Cart
        </p>
      </div>
    </section>
  );
};
