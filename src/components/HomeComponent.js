import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardBody>
                <h1>One On One Learning</h1>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <RenderCard />
                </div>
            </div>
        </div>
    );
}

export default Home;