import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';


function ContactBreadcrumb() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <h2 className="text-white font-weight-light">Contact</h2>
                    <hr className="contact-hr"/>
                </div>
            </div>
        </div>
    );
}

class Contact extends Component {

    render () {
        return (
            <React.Fragment>

            <ContactBreadcrumb />
    
            <div className="container formcontainer text-white mb-5 rounded-lg">
                <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5 className="font-weight-light">Our Address</h5>
                        <address>
                            5 Coach St.<br />
                            Palo Alto, CA 87905<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col">
                        <a className="btn btn-link" role="button" href="tel:+11234567890"> <i className="fa fa-phone"> </i> 1-123-456-7890</a> <br />
                        <a className="btn btn-link" role="button" href="mailto:coachcoach@coach.co"> <i className="fa fa-envelope-o"> </i> codecoach@coach.co </a>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h2 className="font-weight-light">Schedule Your First Session</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <form>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" className="col-md-2 col-form-label">First Name</Label>
                                    <Col md={10}>
                                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" required/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" className="col-md-2 col-form-label">Last Name</Label>
                                    <Col md={10}>
                                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" required/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="areaCode" className="col-md-2 col-form-label">Contact Tel.</Label>
                                    <Col md={3}>
                                        <input type="tel" className="form-control" id="areaCode" name="areaCode" placeholder="Area code" required/>
                                    </Col>
                                    <div class="col-7">
                                        <input type="tel" className="form-control" name="telNum" placeholder="Tel. number" />
                                    </div>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" className="col-md-2 col-form-label">Email</Label>
                                    <Col md={10}>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <label htmlFor="coach" className="col-md-2 col-form-label">Coach</label>
                                    <Col md={10}>
                                        <select name="coach" id="coach" className="form-control" required>
                                            <option value="1" selected disabled>Select One</option>
                                            <option value="1">Mark Wang</option>
                                            <option value="1">Susan Ashcroft</option>
                                            <option value="1">Farah Amin</option>
                                            <option value="1">Bobby Johnson</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="feedback" className="col-md-2 col-form-label">Coach's Message</Label>
                                    <Col md={10}>
                                        <textarea className="form-control" id="feedback" name="feedback" rows="8"></textarea>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <div className="offset-md-2 col-md-10">
                                        <button className="btn btn-lg btn-info" type="submit">Schedule</button>
                                    </div>
                                </Row>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Contact;