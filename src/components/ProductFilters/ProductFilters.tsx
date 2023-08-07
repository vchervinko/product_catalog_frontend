/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { FC, useEffect, useRef, useState } from 'react';
import './ProductFilters.scss';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import { useSearchParams } from 'react-router-dom';
import { SearchLink } from '../SearchLink';
import classNames from 'classnames';

const limitOptions = ['16', '32', '48'];

export enum SortByOptions {
  'Newest' = 'newest',
  'Highest price' = 'highestPrice',
  'Lowest price' = 'lowestPrice',
}

const getEnumKeys = <T extends object>(enumType: T)
  : Array<keyof typeof enumType> => {
  return Object
    .keys(enumType) as Array<keyof typeof enumType>;
};

export const ProductFilters: FC = () => {
  const { limit: initialLimit } = useProductsContext();
  const [searchParams] = useSearchParams();

  const [isSortByOpened, setIsSortByOpened] = useState(false);
  const [isLimitOpened, setIsLimitOpened] = useState(false);

  const limit = searchParams.get('limit') || initialLimit;
  const sortBy = searchParams.get('sortBy') || 'newest';

  const sortByOptions = getEnumKeys(SortByOptions);

  const toggleSortBy = () => {
    setIsSortByOpened((prev) => !prev );
  };

  const toggleLimit = () => {
    setIsLimitOpened((prev) => !prev);
  };

  const refSortBy = useRef();
  const refLimit = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        isSortByOpened
        && refSortBy.current
        && !refSortBy.current.contains(e.target)) {
        setIsSortByOpened(false);
      }

      if (
        isLimitOpened
        && refLimit.current
        && !refLimit.current.contains(e.target)) {
        setIsLimitOpened(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isSortByOpened, isLimitOpened]);

  return (
    <section className="ProductFilters">
      <form className="ProductFilters__form">

        <div className="ProductFilters__sortBy-container" ref={refSortBy}>
          <p className="ProductFilters__label">Sort by</p>
          <div
            role="button"
            tabIndex={0}
            className="ProductFilters__field"
            onClick={toggleSortBy}
            onKeyDown={toggleSortBy}
          >
            {sortByOptions
              .filter(key => SortByOptions[key] === sortBy)[0]}
            <div
              className="ProductFilters__icon-container" />
          </div>

          <div className="ProductFilters__list-container" >
            <ul className={classNames('ProductFilters__list', {
              'ProductFilters__list-sortBy-opened': isSortByOpened,
            })} >
              {sortByOptions.map(key=> (

                <li
                  key={key}
                  className="ProductFilters__list-item"
                  role="button"
                  tabIndex={0}
                  onKeyDown={toggleSortBy}
                  onClick={toggleSortBy}
                >
                  <SearchLink
                    params={{ sortBy: SortByOptions[key] }}
                  >
                    {key}
                  </SearchLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ProductFilters__itemPage-container" ref={refLimit}>
          <p className="ProductFilters__label">Items on page</p>

          <div
            role="button"
            tabIndex={0}
            className="ProductFilters__field"
            onClick={toggleLimit}
            onKeyDown={toggleLimit}
          >
            {limit}
            <div
              className="ProductFilters__icon-container" />
          </div>

          <div className="ProductFilters__list-container" >
            <ul className={classNames('ProductFilters__list', {
              'ProductFilters__list-limit-opened': isLimitOpened,
            })}>
              {limitOptions.map(limitOption=> (

                <li
                  key={limitOption}
                  className="ProductFilters__list-item"
                  role="button"
                  tabIndex={0}
                  onKeyDown={toggleLimit}
                  onClick={toggleLimit}
                >
                  <SearchLink
                    className="ProductFilters__link"
                    params={{ limit: limitOption }}
                  >
                    {limitOption}
                  </SearchLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </form>
    </section>
  );
};
