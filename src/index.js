import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InternalUser from './views/internalUserList/InternalUserList.js';
import InternalUserDetail from './views/internalUserDetail/InternalUserDetail.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Error404 from './views/error/Error404';
import { constNames } from './const/index.js';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>  
        <Switch>
          <Route path={["/", constNames.routeNames.internalUser]} exact component={InternalUser}/>
          <Route path={[`${constNames.routeNames.internalUserDetail}/:id`]} exact component={InternalUserDetail}/>
          <Route component={Error404}/> 
        </Switch>
      </div>  
    </Router> 
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
