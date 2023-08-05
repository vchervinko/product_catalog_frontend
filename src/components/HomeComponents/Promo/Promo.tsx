import { FC } from 'react';
import Slider from '../Slider/Slider';

import './Promo.scss';

const Promo: FC = () => {
  return (
    <section className="Promo">
      <div className="container">
        <div className="Promo__title">
          Welcome to Nice Gadgets store!
        </div>
        <Slider />
      </div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Promo;
