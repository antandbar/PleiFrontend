import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

import AuthContext from './context';
import storage from '../../utils/storage';

function AuthButton({ className }) {
  const { isLogged, handleLogout: onLogout } = useContext(AuthContext);

  const handleLogoutClick = async () => {
    onLogout();
    storage.remove('auth');
  };

  return isLogged ? (
    <Button className={className} onClick={handleLogoutClick}>
      Logout
    </Button>
  ) : (
    <Button as={Link} to="/login" variant="primary" className={className}>
      Login
    </Button>
  );
}

export default AuthButton;
