import { FC, ReactNode } from 'react';
import './Grid.scss';

interface Props {
  children: ReactNode;
}

export const Grid: FC<Props> = ({ children }) => (
  <div className="Grid">{children}</div>
);
