import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ProductsContextProvider } from './contexts/ProductsContext/ProductsContextProvider';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>,
);
