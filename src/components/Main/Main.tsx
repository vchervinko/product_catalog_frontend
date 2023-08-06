import { FC } from 'react';
import { Categories } from '../Categories';
import { HotPrices } from '../HotPrices';
import { NewModels } from '../NewModels';
import { Promo } from '../Promo';
import './ Main.scss';

export const Main: FC = () => (
  <div className="Main">
    <Promo />
    <NewModels />
    <Categories />
    <HotPrices />
  </div>
);
