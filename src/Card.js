import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Loginform from './LoginForm';
import AdminPage from './AdminPage';

function Card(props){
    return(
        <div className='card-container'>
            <Switch>
                <Route exact path='/' component={Loginform} />
                <Route exact path='/admin' component={AdminPage} />
            </Switch>
        </div>
    )
}

export default Card;