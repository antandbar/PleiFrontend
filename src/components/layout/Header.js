import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Header.css';
import logo from '../../assets/logo-plei.jpg';
import './Header.css';
import AuthButton from '../../views/auth/AuthButton';
import { constNames } from '../../const/index';

function Header({ className }) {
  return (
    <header className={classNames('header', className)}>
      <Link className="header-link-logo" to="/">
        <img src={logo} className="header-logo" alt="logo-advertpop"></img>
      </Link>
      <nav className="header-nav">
        <NavLink
          to={constNames.routeNames.internalCreateUser}
          className={classNames(
            ({ isActive }) => (isActive ? 'active' : ''),
            'header-navLink',
          )}
        >
          Crear Data
        </NavLink>
        <NavLink
          to={constNames.routeNames.internalUser}
          className={classNames(
            ({ isActive }) => (isActive ? 'active' : ''),
            'header-navLink',
          )}
          end
        >
          Data Usuario Interno
        </NavLink>
        <AuthButton className="header-button" />
      </nav>
    </header>
  );
}

export default Header;
