import { FC } from 'react';
import { Grid } from '../components/Grid/Grid';
import { TestProduct } from '../components/TestProduct/TestProduct';
import { PhonesContextProvider } from '../context/PhonesContext/PhonesContextProvider';

const PhonesPage: FC = () => {
  const productCount = 24;

  return (
    <PhonesContextProvider>
      <section>
        PHONES
        <Grid>
          {Array.from({ length: productCount }).map((_, index) => (
            <TestProduct key={index} />
          ))}
        </Grid>
      </section>
    </PhonesContextProvider>
  );
};

export default PhonesPage;
