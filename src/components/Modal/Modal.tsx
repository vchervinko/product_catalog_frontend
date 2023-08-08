import { FC } from 'react';
import { Link } from 'react-router-dom';

import cart from '../../assets/icons/cart-checkout.svg';
import close from '../../assets/icons/Close.svg';

import './Modal.scss';

interface Props {
  setActive: (value: boolean) => void,
}

export const Modal: FC<Props> = ({ setActive }) => {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <button onClick={() => setActive(false)}>
          <img
            className="Modal__close"
            src={close}
            alt="close"
          />
        </button>
        <div className="container">
          <img
            className="Modal__success"
            src={cart}
            alt="Thank You!"
          />
          <div className="Modal__title">
            Thank You!
          </div>
          <div className="Modal__message">
            Your order was successfully applied!
          </div>
          <div className="Modal__button">
            <Link className="Modal__link" to ="/">Return Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
