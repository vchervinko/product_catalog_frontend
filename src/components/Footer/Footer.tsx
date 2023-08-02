import { FC } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTopDefault } from '../../helpers/ScrollToTop.tsx';
import { externalLinks } from '../../helpers/constants/externalLinks.ts';
import { Container } from '../Container/Container.tsx';
import { Icon } from '../Icon/Icon.tsx';
import { Logo } from '../Logo';
import './Footer.scss';

export const Footer: FC = () => (
  <footer className="Footer">
    <Container>
      <div className="Footer__content">
        <Logo height={32} />

        <ul className="Footer__list">
          {externalLinks.map(({ id, name, link }) => (
            <li key={id} className="Footer__item">
              <Link className="Footer__link" to={link} target="_blank">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="Footer__button" onClick={scrollToTopDefault}>
          Back to top

          <Icon size={32} type="arrow-up" />
        </button>
      </div>
    </Container>
  </footer>
);
