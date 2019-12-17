import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Coaches from './CoachesComponent';
import Contact from './ContactComponent';
import Background from './BackgroundComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

    render () {

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={Home} />                  
                    <Route exact path='/aboutus' component={About} />
                    <Route exact path='/coaches' component={Coaches} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default Main;