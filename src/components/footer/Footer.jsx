import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-item">
                        <h3 className="footer-item-title">Company</h3>
                        <span>
                            <Link to="/">About Us</Link>
                        </span>
                        <span>
                            <Link to="/">Our services</Link>
                        </span>
                        <span>
                            <Link to="/">Privacy policy</Link>
                        </span>
                        <span>
                            <Link to="/">Affiliate Program</Link>
                        </span>
                    </div>
                    <div className="footer-item">
                        <h3 className="footer-item-title">Cuisines</h3>
                        <span>
                            <Link to="/cuisine/american">American</Link>
                        </span>
                        <span>
                            <Link to="/cuisine/chinese">Chinese</Link>
                        </span>
                        <span>
                            <Link to="/cuisine/italian">Italian</Link>
                        </span>
                        <span>
                            <Link to="/cuisine/mexican">Mexican</Link>
                        </span>
                    </div>
                    <div className="footer-item">
                        <h3 className="footer-item-title">Useful links</h3>
                        <span>
                            <Link>Link 1</Link>
                        </span>
                        <span>
                            <Link>Link 2</Link>
                        </span>
                        <span>
                            <Link>Link 3</Link>
                        </span>
                        <span>
                            <Link>Link 4</Link>
                        </span>
                    </div>
                    <div className="footer-item">
                        <h3 className="footer-item-title">Contact</h3>
                        <span>
                            <Link>Contact 1</Link>
                        </span>
                        <span>
                            <Link>Contact 2</Link>
                        </span>
                        <span>
                            <Link>Contact 3</Link>
                        </span>
                        <span>
                            <Link>Contact 4</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer