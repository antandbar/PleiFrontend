import React, { useState } from 'react';

import './index.css';
import InternalUser from './views/internalUserList/InternalUserList.js';
import InternalUserDetail from './views/internalUserDetail/InternalUserDetail.js';
import InternalCreateUser from './views/InternalCreateUser/InternalUserCreate.js';
import InternalEditUser from './views/InternalEditUser/InternalUserEdit.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Error404 from './views/error/Error404';
import { constNames } from './const/index.js';
import LoginPage from './views/auth/LoginPage/LoginPage';
import { AuthContextProvider } from './views/auth/context';
import RequireAuth from './views/auth/RequireAuth';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div>
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route
            path={constNames.routeNames.internalUser}
            element={
              <RequireAuth>
                <InternalUser />
              </RequireAuth>
            }
          />
          <Route
            path={`${constNames.routeNames.internalUserDetail}/:id`}
            element={
              <RequireAuth>
                <InternalUserDetail />
              </RequireAuth>
            }
          />
          <Route
            path={constNames.routeNames.internalCreateUser}
            element={
              <RequireAuth>
                <InternalCreateUser />
              </RequireAuth>
            }
          />
          <Route
            path={`${constNames.routeNames.internalEditUser}/:id`}
            element={
              <RequireAuth>
                <InternalEditUser />
              </RequireAuth>
            }
          />
          <Route path={constNames.routeNames.login} element={<LoginPage />} />
          <Route
            path="/404"
            element={
              <RequireAuth>
                <Error404 />
              </RequireAuth>
            }
          />
          <Route path="/" element={<Navigate to="/index" />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
export default App;
