/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable init-declarations */
import React, { useCallback, useEffect, useState } from 'react';
import './Search.scss';
import { getProductByQuery } from '../../api/product';
import { DropdownMenu } from '../DropdownMenu';
import { Product } from '../../types/Product';
import SearchImg from '../../assets/icons/Search.svg';
import classNames from 'classnames';

const debounce = <T extends (...args: never[]) => void>(
  func: T,
  delay: number,
) => {
  let timerId: number;

  return (...args: Parameters<T>): void => {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay, ...args);
  };
};

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const applyQuery = useCallback(debounce(setAppliedQuery, 500), []);

  const handleQueryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
    applyQuery(value);
    setIsDropdownVisible(true);
  };

  const clearQuery = () => {
    setQuery('');
  };

  const onSelected = () => {
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const fetchVisibleProducts = async () => {
      if (!appliedQuery) {
        setVisibleProducts([]);

        return;
      }

      try {
        const products = await getProductByQuery(appliedQuery);
        setVisibleProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setVisibleProducts([]);
      }
    };

    fetchVisibleProducts();
  }, [appliedQuery]);

  return (
    <main className="Search">
      <div>
        <div>
          <label>
            <img
              src={SearchImg}
              alt="Search img"
              className="Search__image"
            />

            <input
              type="text"
              name="query"
              placeholder="Search"
              className="Search__input"
              value={query}
              onChange={handleQueryOnChange}
            />
          </label>
        </div>

        <div
          className={classNames('Search__dropdown', {
            'Search__dropdown--active': isDropdownVisible,
          })}
        >
          <DropdownMenu
            products={visibleProducts}
            clearQuery={clearQuery}
            onSelected={onSelected}
          />
        </div>
      </div>
    </main>
  );
};
