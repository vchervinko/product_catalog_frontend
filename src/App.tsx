import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.scss';
import AccessoriesPage from './pages/AccessoriesPage';
import MainPage from './pages/MainPage';
import PhonesPage from './pages/PhonesPage';
import TabletsPage from './pages/TabletsPage';
import NotFound from './components/NotFound/NotFound';

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
        path: 'phones',
        element: <PhonesPage />,
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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
