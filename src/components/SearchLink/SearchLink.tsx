import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/SearchHelper/SearchHelper';
import { SearchLinkProps } from '../../types/SearchLinkProps';

export const SearchLink: React.FC<SearchLinkProps> = ({
  children,
  params,
  ...props
}) => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={{
        search: getSearchWith(searchParams, params),
      }}
      {...props}>
      {children}
    </Link>
  );
};
