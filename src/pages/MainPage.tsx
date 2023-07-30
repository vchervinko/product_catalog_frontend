import { FC } from 'react';
import { Grid } from '../components/Grid/Grid';
import { TestProduct } from '../components/TestProduct/TestProduct';

const MainPage: FC = () => {
  const productCount = 24;

  return (
    <main>
      Main Page
      <Grid>
        {Array.from({ length: productCount }).map((_, index) => (
          <TestProduct key={index} />
        ))}
      </Grid>
    </main>
  );
};

export default MainPage;
