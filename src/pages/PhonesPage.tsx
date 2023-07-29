import { FC } from 'react';
import { PhonesContextProvider } from '../context/phonesContext/phonesContextProvider';

const PhonesPage: FC = () => {
  return (
    <PhonesContextProvider>
      <main>Phones Page</main>
    </PhonesContextProvider>
  );
};

export default PhonesPage;
