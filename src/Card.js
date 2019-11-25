import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Loginform from './LoginForm';
import AdminPage from './AdminPage';
import MemberPage from './MemberPage';

function Card(props){
    return(
        <div className='card-container'>
            <Switch>
                <Route exact path='/' component={Loginform} />
                <Route exact path='/admin' component={AdminPage} />
                <Route path ='/patron' component={MemberPage}/>
            </Switch>
        </div>
    )
}

export default Card;