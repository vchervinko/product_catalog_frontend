import { FC } from 'react';
import { PhonesContextProvider } from '../context/phonesContext/PhonesContextProvider';

const PhonesPage: FC = () => {
  return (
    <PhonesContextProvider>
      <main>Phones Page</main>
    </PhonesContextProvider>
  );
};

export default PhonesPage;
