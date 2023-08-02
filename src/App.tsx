import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.scss';
import AccessoriesPage from './pages/AccessoriesPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PhonesPage from './pages/PhonesPage';
import TabletsPage from './pages/TabletsPage';
import PhoneDetailsPage from './pages/PhoneDetailsPage/PhoneDetailsPage';

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
        children: [
          {
            path: ':phoneId',
            element: <PhoneDetailsPage />,
          },
        ],
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
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
