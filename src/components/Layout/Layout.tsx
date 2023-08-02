import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ScrollToTop } from '../../helpers/ScrollToTop';

export const Layout: FC = () => (
  <>
    <Header />

    <ScrollToTop />

    <main>
      <Container>
        <Outlet />
      </Container>
    </main>

    <Footer />
  </>
);
