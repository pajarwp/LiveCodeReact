import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../AppHome';
import Action from '../AppAction';
import Romance from '../AppRomance';
import Fiction from '../AppFiction';
import Comedy from '../AppComedy'
import SignIn from '../AppSignIn'
import Profile from '../AppProfile'

const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/action" component={Action}/>
            <Route exact path="/romance" component={Romance}/>
            <Route exact path="/fiction" component={Fiction}/>
            <Route exact path="/comedy" component={Comedy}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/profile" component={Profile}/>
        </Switch>
    )
}

export default MainRoute;