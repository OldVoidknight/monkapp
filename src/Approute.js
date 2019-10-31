import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import AdminPage from './AdminPage';




function Approute({props}) {


  return (
    <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route path ='/admin' component={AdminPage}/>
    </Switch>
    
  );
}

export default Approute;