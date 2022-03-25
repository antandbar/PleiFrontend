import { useState, useContext, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import FormField from '../../../components/common/FormField';
import login from './LoginPageService';
import AuthContext from '../context';

import './LoginPage.css';

function LoginPage() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleLogin: onLogin } = useContext(AuthContext);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const { username, password, remember } = credentials;

  const handleChange = event => {
    setCredentials(credentials => ({
      ...credentials,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  };

  const resetError = () => setError(null);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(true);
      await login(credentials); 
      setIsLoading(false);
      onLogin();
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Plei</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="Username"
          className="loginForm-field"
          value={username}
          onChange={handleChange}
          ref={ref}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          value={password}
          onChange={handleChange}
        />

        <input
          type="checkbox"
          name="remember"
          checked={remember}
          value="remember"
          onChange={handleChange}
        />
        <label>Recordar contraseña</label>

        <Button
          className="loginForm-submit"
          type="submit"
          variant="primary"
          disabled={!username || !password || isLoading}
        >
          Log in
        </Button>
      </form>
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
