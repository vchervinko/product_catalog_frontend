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
        disabled: isDisabled,
      })}>
      <SearchLink
        params={{ page: `${isFirstPage ? currentPage : currentPage - 1}` }}
        className={classNames('link-icon', 'pagination--left', {
          'link-icon--arrow-left': !isFirstPage,
          'link-icon--arrow-left-disabled': isFirstPage,
        })}></SearchLink>

      <ul className="pagination__numbers">
        {numbers.map((number) => (
          <li key={number}>
            <SearchLink
              params={{ page: number.toString() }}
              className={classNames('link-text', {
                'link-text--selected': currentPage === number,
              })}>
              {number}
            </SearchLink>
          </li>
        ))}
      </ul>

      <SearchLink
        params={{ page: `${isLastPage ? currentPage : currentPage + 1}` }}
        className={classNames('link-icon', 'pagination--right', {
          'link-icon--arrow-right': !isLastPage,
          'link-icon--arrow-right-disabled': isLastPage,
        })}></SearchLink>
    </section>
  );
};
