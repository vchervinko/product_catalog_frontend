import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout: FC = () => (
  <>
    <Header />

    <Container>
      <Outlet />
    </Container>

    <Container>
      <Footer />
    </Container>
  </>
);
