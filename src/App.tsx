import { FC } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.scss';
import AccessoriesPage from './pages/AccessoriesPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PhonesPage from './pages/PhonesPage';
import TabletsPage from './pages/TabletsPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },
      {
        path: 'phones',
        element: <PhonesPage />,
      },
      {
        path: 'phones/:phoneId',
        element: <ProductPage />,
      },
      {
        path: 'tablets',
        element: <TabletsPage />,
      },
      {
        path: 'accessories',
        element: <AccessoriesPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
