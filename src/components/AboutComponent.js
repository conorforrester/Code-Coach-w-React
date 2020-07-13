import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardText, Media } from 'reactstrap';
import AboutCarousel from './CarouselComponent';
import { Link } from 'react-router-dom';


function About(props){
    return (
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                    <h2 className="text-white font-weight-light">About</h2>
                    <hr className="about-hr"/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Card className="shadow my-5">
                        <CardBody className="p-5">
                            <CardText>
                                <h1 className="font-weight-light">About Us</h1>
                                <p className="font-weight-light">Code Coach was founded in 2019 for upcoming developers to be able to learn at their own pace. 
                                We found most coding bootcamps offered great curriculum material but most graduates barely remembered what they learned.
                                We aim to provide a platform to learn one on one with a coach of your choice and on your schedule. We have affordable options 
                                to learn different tech stacks as well. See the Coaches section to learn more about the individual coaches and what they can teach you!</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 text-white circlebg">
                    <h3>Affordable</h3>
                    <i className="fa fa-usd fa-5x" aria-hidden="true"></i>
                </div>
                <div className="col-md-3 text-white circlebg">
                    <h3>Remote</h3>
                    <i className="fa fa-laptop fa-5x" aria-hidden="true"></i>                     
                </div>
                <div className="col-md-3 text-white circlebg">
                    <h3>Flexible</h3>
                    <i className="fa fa-calendar fa-5x" aria-hidden="true"></i>
                </div>
                <div className="col-md-3 text-white circlebg">
                    <h3>One on One</h3>
                    <i className="fa fa-handshake-o fa-5x" aria-hidden="true"></i>  
                </div>
            </div>
        </div>


        <div className="container">
            <AboutCarousel />
        </div>
        </React.Fragment>
    );
}

export default About;