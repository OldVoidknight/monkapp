import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import AdminPage from './AdminPage';
import MemberPage from './MemberPage';




function Approute({props}) {


  return (
    <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route path ='/admin' component={AdminPage}/>
        <Route path ='/patron' component={MemberPage}/>
    </Switch>
    
  );
}

export default Approute;