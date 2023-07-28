import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { Layout } from './components/Layout';
import AccessoriesPage from './pages/AccessoriesPage';
import MainPage from './pages/MainPage';
import PhonesPage from './pages/PhonesPage';
import TabletsPage from './pages/TabletsPage';

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
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
