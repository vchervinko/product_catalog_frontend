import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';

export const Layout: FC = () => {
  return (
    <>
      <header>Header</header>

      <Outlet />

      <Footer />
    </>
  );
};
