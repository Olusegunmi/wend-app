import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';

function Footer() {
    return (

        <footer className="main-footer footer-style-four" id='contact'>
            <div className="bg">
                <div className="icon-bubbles" />
                <div className="icon-leave-5 bounce-x" />
                <div className="icon-flower-19 bounce-y" />
                <div className="icon-flower-20 bounce-y wow" data-wow-delay="3s" />
            </div>
            <div className="auto-container">
                <div className="row">          
                    <div className="form-column col-lg-5 col-md-12 col-sm-12 order-lg-2">
                        <div className="contact-form-four">
                            <h6 className="title">Are you Attending? </h6>
                            <form method="get" action="/" id="contact-form">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="custom-radio-box">Yes, I will be there
                                            <input type="radio" name="radio" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="custom-radio-box">Sorry, I can’t come
                                            <input type="radio" name="radio" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <div className="input-outer">
                                            <input type="text" name="name" placeholder="Complete Name" required />
                                        </div>
                                    </div>                  
                                    <div className="form-group col-lg-12">
                                        <div className="input-outer">
                                            <input type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                    </div>                  
                                    <div className="form-group col-lg-12">
                                        <div className="input-outer">
                                            <input type="text" name="number" placeholder="Number of Guests" required />
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <div className="input-outer">
                                            <textarea name="message" placeholder="Notes" required></textarea>
                                        </div>
                                    </div>                  
                                    <div className="form-group col-lg-12">
                                        <button className="theme-btn btn-style-one green" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="content-column col-lg-7 col-md-12 col-sm-12">
                        <div className="widgets-section">
                            <div className="row">
                                <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget about-widget">
                                        <div className="widget-content">
                                            {/* <div className="logo"><Link to="/"><img src={logo} alt="Wendola" /></Link></div> */}
                                            <div className="text">Semper libero, sit amet blandit vel, rhoncus <br /> ven enatis luctus pulvinar, hendrerit id, lore <br /> m. Semp er libero, sit amet blandit vel.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget contact-widget">
                                        <h6 className="widget-title">Contact Information</h6>
                                        <div className="widget-content">
                                            <ul className="contact-list-three light">
                                                <li><i className="icon fa fa-envelope" /><Link to="/">username@domain.com</Link></li>
                                                <li><i className="icon fa fa-mobile" /><Link to="/">+(123) 456 - 7890 - 456 - 7890</Link></li>
                                                <li><i className="icon fa fa-map-marker-alt" /><Link to="/">Street New York</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-column col-xl-12 col-lg-12 col-md-6 col-sm-12">
                                    <div className="copyright-text">Copyright © Vendola kodesolution . All rights reserved.</div>
                                    <div className="icons-box">
                                        <ul className="social-icon-one">
                                            <li><Link to="/"><i className="icon fab fa-facebook-f" /></Link></li>
                                            <li><Link to="/"><i className="icon fab fa-google-plus" /></Link></li>
                                            <li><Link to="/"><i className="icon fab fa-twitter" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
