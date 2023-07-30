import { FC, ReactNode } from 'react';
import './Grid.scss';

interface Props {
  children: ReactNode;
}

const Grid: FC<Props> = ({ children }) => {
  return <div className="Grid">{children}</div>;
};

export default Grid;
