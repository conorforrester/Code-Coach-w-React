import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Background from './BackgroundComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

    render () {
        return (
            <div>
                <Header />
                <Switch>
                    
                </Switch>

            </div>
        );
    }
}


export default Main;