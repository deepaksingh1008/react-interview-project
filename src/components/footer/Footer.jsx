// Footer.js
import React from 'react';
import './footer.css';  // Import the CSS file for styling
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h3>Global HQ, UK Office</h3>
                    <p>Rose Villa, 42 Glebe street, Loughborough, UK, LE11 1JR</p>
                    <p><FaPhone /> +44-748 6464 434</p>
                </div>
                <div className="footer-section">
                    <h3>India Office</h3>
                    <p>AMC 0 TOWER, Ground Floor, A-5, 6, 7 Sector 9, Noida, UP, 201301</p>
                    <p><FaPhone /> +91-999 0912 140</p>
                </div>
                <div className="footer-section">
                    <h3>Email Address</h3>
                    <p><FaEnvelope /> support@simulanis.com</p>
                </div>
            </div>

            <div className="footer-middle">
                <div className="footer-links">
                    <h3>Simulanis UNO</h3>
                    <ul>
                        <li>3D XR Library</li>
                        <li>Paint Simulator</li>
                        <li>Fire Safety Simulator</li>
                        <li>Dynamic Assist</li>
                        <li>Remote Assist</li>
                        <li>Immersive Collaboration</li>
                        <li>360 Builder</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Credibility</li>
                        <li>Careers <span className="hiring">We’re hiring!</span></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Resources</h3>
                    <ul>
                        <li>Solutions</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h3>SUBSCRIBE OUR NEWSLETTER</h3>
                    <input type="email" placeholder="Enter your email" />
                    <button>Submit</button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; Simulanis, Inc. 2024</p>
                <div className="footer-social">
                    <FaLinkedin />
                    <FaInstagram />
                    <FaFacebook />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
