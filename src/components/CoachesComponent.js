import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardText, CardTitle, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { COACHES } from '../shared/coaches';

function CoachesBreadcrumb () {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Coaches</BreadcrumbItem>
                    </Breadcrumb>
                    <h2 className="text-white font-weight-light">Coaches</h2>
                    <hr className="coaches-hr"/>
                </div>
            </div>
        </div>
    );
}

class Coaches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coaches: COACHES
        };
    }

    render () {
        const coach = this.state.coaches.map(coach => {
            return (
                <React.Fragment>
                <div key={coach.id} className="col-md-3 d-none d-md-inline">
                    <img src={coach.image} className="shadow img-fluid rounded-circle" alt={coach.image} width="100%" />
                </div>
                <div key={coach.id} className="col-md-9 col-12 align-self-center">
                    <Card className="shadow my-5 coachcards">
                        <CardBody className="text-white">
                            <h3 className="font-weight-light">{coach.name}</h3> <br />
                            {coach.line1} <br />
                            {coach.line2} <br />
                            {coach.line3} <br />
                            {coach.line4}
                        </CardBody>
                    </Card>
                </div>
                </React.Fragment>
            );
        });
    
        return (
            <React.Fragment>
                <CoachesBreadcrumb />
                <div className="container">
                    <div className="row">
                        {coach}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Coaches;