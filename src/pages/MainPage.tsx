import { FC, useEffect } from 'react';

const MainPage: FC = () => {
  useEffect(() => {
    document.title = 'Nice Gadgets';
  }, []);

  return (
    <h1>Home Page</h1>
  );
};

export default MainPage;
