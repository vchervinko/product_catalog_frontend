import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { ProductsContextProvider } from './contexts/ProductsContext/ProductsContextProvider.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>
);
