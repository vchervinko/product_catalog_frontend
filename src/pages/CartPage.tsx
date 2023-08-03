import { FC, useEffect } from 'react';
import { Cart } from '../components/Cart';

const CartPage: FC = () => {
  useEffect(() => {
    document.title = 'Nice Gadgets | Cart';
  }, []);

  return (
    <Cart />
  );
};

export default CartPage;
