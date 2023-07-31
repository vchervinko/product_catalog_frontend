import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.scss';
import AccessoriesPage from './pages/AccessoriesPage';
import MainPage from './pages/MainPage';
import PhonesPage from './pages/PhonesPage';
import TabletsPage from './pages/TabletsPage';
import NotFoundRedirect from './pages/NotFoundRedirect';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: 'not-found',
        element: <NotFound />,
      },
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
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
