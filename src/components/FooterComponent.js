import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/coaches">Coaches</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fa-2x"></i></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook fa-2x"></i></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-2x"></i></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube fa-2x"></i></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a className="btn btn-link" role="button" href="tel:+1234567890"><i className="fa fa-phone fa-lg"></i> 1-123-456-7890 </a> <br /> 
                        <a className="btn btn-link" role="button" href="mailto:codecoach@coach.co"><i className="fa fa-envelope-o fa-lg"></i> codecoach@coach.co </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;