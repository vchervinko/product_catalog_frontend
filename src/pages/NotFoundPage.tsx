import { FC, useEffect } from 'react';
import { NotFound } from '../components/NotFound';

const NotFoundPage: FC = () => {
  useEffect(() => {
    document.title = 'Nice Gadgets | Not Found';
  }, []);

  return (
    <NotFound />
  );
};

export default NotFoundPage;
