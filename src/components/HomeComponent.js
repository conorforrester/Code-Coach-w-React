import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Card className="shadow my-5">
                        <CardBody className="p-5">
                            <CardText>
                                <h1 className="font-weight-light">One On One Learning</h1>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Card className="shadow my-5">
                        <CardBody className="p-5">
                            <CardText>
                                <h1 className="font-weight-light">Affordable Pricing Options</h1>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Card className="shadow my-5">
                        <CardBody className="p-5">
                            <CardText>
                                <h1 className="font-weight-light">Your Own Schedule</h1>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;