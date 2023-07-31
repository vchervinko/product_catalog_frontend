import { FC, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const NotFoundRedirect: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/not-found');
  }, []);

  return true;
};

export default NotFoundRedirect;
