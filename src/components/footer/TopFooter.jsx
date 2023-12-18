import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function TopFooter() {
    return (
        <>
        <Router>
            <div className="section">

                <div className="container">

                    <div className="row">
                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                                <ul className="footer-links">
                                  
                                    <li><Link to="#"><FontAwesomeIcon icon={faMapMarker}/> 1734 Stonecoal Road</Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faPhone}/> +021-95-51-84</Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faEnvelope}/> email@email.com</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Categories</h3>
                                <ul className="footer-links">
                                    <li><Link to="#">Hot deals</Link></li>
                                    <li><Link to="#">Laptops</Link></li>
                                    <li><Link to="#">Smartphones</Link></li>
                                    <li><Link to="#">Cameras</Link></li>
                                    <li><Link to="#">Accessories</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="clearfix visible-xs"></div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Information</h3>
                                <ul className="footer-links">
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Orders and Returns</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Service</h3>
                                <ul className="footer-links">
                                    <li><Link to="#">My Account</Link></li>
                                    <li><Link to="#">View Cart</Link></li>
                                    <li><Link to="#">Wishlist</Link></li>
                                    <li><Link to="#">Track My Order</Link></li>
                                    <li><Link to="#">Help</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </Router>
        </>
    )
}
