import { FC } from 'react';
import Grid from '../components/Grid/Grid';
import TestProduct from '../components/TestProduct/TestProduct';

const MainPage: FC = () => {
  const productCount = 24;

  return (
    <section>
      MAIN
      <Grid>
        {Array.from({ length: productCount }).map((_, index) => (
          <TestProduct key={index} />
        ))}
      </Grid>
    </section>
  );
};

export default MainPage;
