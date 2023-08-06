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

// eslint-disable-next-line @typescript-eslint/ban-types
const getEnumKeys = <T extends {}>(enumToDeconstruct: T)
  : Array<keyof typeof enumToDeconstruct> => {
  return Object
    .keys(enumToDeconstruct) as Array<keyof typeof enumToDeconstruct>;
};

export const ProductFilters: FC = () => {
  const { limit: initialLimit } = useProductsContext();
  const [searchParams] = useSearchParams();

  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  const [isOpenLimit, setIsOpenLimit] = useState(false);

  const limit = searchParams.get('limit') || initialLimit;
  const sortBy = searchParams.get('sortBy') || 'newest';

  const sortByOptions = getEnumKeys(SortByOptions);

  const toggleSortBy = () => {
    setIsOpenSortBy((prev) => !prev );
  };

  const toggleLimit = () => {
    setIsOpenLimit((prev) => !prev);
  };

  const refSortBy = useRef();
  const refLimit = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        isOpenSortBy
        && refSortBy.current
        && !refSortBy.current.contains(e.target)) {
        setIsOpenSortBy(false);
      }

      if (
        isOpenLimit
        && refLimit.current
        && !refLimit.current.contains(e.target)) {
        setIsOpenLimit(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpenSortBy, isOpenLimit]);

  return (
    <section className="ProductFilters">
      <form className="ProductFilters__form">

        <div className="ProductFilters__sortBy-container" >
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
              className="ProductFilters__icon-container"
            ></div>
          </div>

          <div className="ProductFilters__list-container" ref={refSortBy}>
            <ul className={classNames('ProductFilters__list', {
              'ProductFilters__list-sortBy-opened': isOpenSortBy,
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

        <div className="ProductFilters__itemPage-container">
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
              className="ProductFilters__icon-container"
            ></div>
          </div>

          <div className="ProductFilters__list-container" ref={refLimit}>
            <ul className={classNames('ProductFilters__list', {
              'ProductFilters__list-limit-opened': isOpenLimit,
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
