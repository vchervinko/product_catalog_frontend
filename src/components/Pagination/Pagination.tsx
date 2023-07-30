import { FC, useEffect, useState } from 'react';
import './Pagination.scss';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { usePhonesContext } from '../../context/PhonesContext/usePhonesContext';
import { SearchLink } from '../SearchLink';
import { getNumbers } from './helper/getNumbers';

type PaginationProps = {
  isDisabled?: boolean;
};

export const Pagination: FC<PaginationProps> = ({ isDisabled = false }) => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const [search] = useSearchParams();
  const { total, limit } = usePhonesContext();

  const currentPage = Number(search.get('page') || 1);

  useEffect(() => {
    setNumbers(getNumbers(total, limit));
  }, [total, limit]);

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= numbers.length;

  return (
    <section
      className={classNames('pagination', {
        'pagination--disabled': isDisabled,
      })}>
      <div
        className="pagination__icon-container
         pagination__icon-container--mr">
        <SearchLink
          params={{ page: `${isFirstPage ? currentPage : currentPage - 1}` }}
          className={classNames('icon', {
            'icon--arrow-left': !isFirstPage,
            'icon--arrow-left-disabled': isFirstPage,
            disable: isFirstPage,
          })}></SearchLink>
      </div>

      <ul className="pagination__numbers">
        {numbers.map((number) => (
          <li key={number}>
            <SearchLink
              params={{ page: number.toString() }}
              className={classNames('pagination__number', {
                'pagination__number--selected': currentPage === number,
              })}>
              {number}
            </SearchLink>
          </li>
        ))}
      </ul>

      <div
        className="pagination__icon-container
        pagination__icon-container--ml">
        <SearchLink
          params={{ page: `${isLastPage ? currentPage : currentPage + 1}` }}
          className={classNames('icon', {
            'icon--arrow-right': !isLastPage,
            'icon--arrow-right-disabled': isLastPage,
            disable: isLastPage,
          })}></SearchLink>
      </div>
    </section>
  );
};
