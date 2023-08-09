import React, { memo } from 'react';
import './DropdownMenu.scss';
import { DropdownItem } from '../DropdownItem';
import { Product } from '../../types/Product';

interface Props {
  products: Product[];
  clearQuery: () => void;
  onSelected: (name: string) => void;
}

export const DropdownMenu: React.FC<Props> = memo(({
  products,
  clearQuery,
  onSelected,
}) => {
  return (
    <div className="dropdown" role="menu">
      <div className="dropdown__content">
        {products.map((item) => (
          <DropdownItem
            key={item.id}
            item={item}
            clearQuery={clearQuery}
            onSelected={onSelected}
          />
        ))}
      </div>
    </div>
  );
});
