import { FC } from 'react';
import './Icon.scss';

export type IconType = 'like' | 'like-filled'
| 'plus' | 'plus-disabled'
| 'minus' | 'minus-disabled'
| 'like' | 'like-filled'
| 'arrow-up' | 'arrow-up-disabled'
| 'arrow-left' | 'arrow-left-disabled'
| 'arrow-right' | 'arrow-right-disabled';

interface Props {
  size: number;
  type: IconType;
}

export const Icon: FC<Props> = ({ size, type }) => (
  <i
    className={`Icon Icon--${type}`}
    style={{
      width: size,
      height: size,
    }}
  />
);
