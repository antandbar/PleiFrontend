import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InternalUser from './views/internalUserList/InternalUserList';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Error404 from './views/error/Error404';
/* import { Provider } from 'react-redux'; */
import { constNames } from './const/index.js';


ReactDOM.render(
  <React.StrictMode>
{/*     <Routes>
      <Route path="/index" component={InternalUser}/>
        {<InternalUser name="pepe"/> }
    </Routes> */}
    {/* <Provider> */}
      <Router>
        <div>  
          <Switch>
            
            <Route path={["/", constNames.routeNames.internalUser]} exact component={InternalUser}/>
            <Route component={Error404}/> 
          </Switch>
        </div>  
      </Router> 
    {/* </Provider> */}
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
