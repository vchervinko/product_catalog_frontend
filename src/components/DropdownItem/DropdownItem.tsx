import React, { memo } from 'react';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../helpers/fetchClient';
import './DropdownItem.scss';

interface Props {
  item: Product;
  clearQuery: () => void;
  onSelected: (name: string) => void;
}

export const DropdownItem: React.FC<Props> = memo(({
  item,
  clearQuery,
  onSelected,
}) => {
  return (
    <div className="DropdownItem">
      <Link
        to={`/${item.category}/${item.itemId}`}
        onClick={() => {
          clearQuery();
          onSelected(item.name);
        }}
      >
        <img
          className="DropdownItem__image"
          src={`${BASE_URL}/${item.image}`}
          alt={item.name}
        />
      </Link>

      <Link
        className="DropdownItem__description"
        to={`/${item.category}/${item.itemId}`}
        onClick={() => {
          clearQuery();
          onSelected(item.name);
        }}
      >
        {item.name}
      </Link>

      <p className="DropdownItem__price">
        {item.price}
      </p>

    </div>
  );
});
