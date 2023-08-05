import { FC } from 'react';
import Promo from '../HomeComponents/Promo/Promo';
import NewModels from '../HomeComponents/NewModels/NewModels';
import HotPrices from '../HomeComponents/HotPrices/HotPrices';
import Categories from '../HomeComponents/Categories/Categories';

import './HomePage.scss';

const HomePage: FC = () => {
  return (
    <main>
      <div className="Home__promo">
        <Promo />
      </div>

      <div className="Home__new">
        <NewModels />
      </div>

      <div className="Home__categories">
        <Categories />
      </div>

      <div className="Home__hot">
        <HotPrices />
      </div>
    </main>
  );
};

export default HomePage;
