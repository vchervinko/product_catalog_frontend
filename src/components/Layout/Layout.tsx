import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <header>Header</header>

      <Outlet />

      <footer>Footer</footer>
    </>
  );
};
