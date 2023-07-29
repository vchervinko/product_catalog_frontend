import { LinkProps } from 'react-router-dom';
import { SearchParams } from './SearchParams';

export type SearchLinkProps = Omit<LinkProps, 'to'> & {
  params: SearchParams;
};
