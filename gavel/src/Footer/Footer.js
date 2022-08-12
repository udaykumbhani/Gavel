import React from "react";
import "../Footer/Footer.scss";
import { ReactComponent as Footerlogo } from "../images/footerlogo.svg";
import { ReactComponent as Reddit } from "../images/reddit.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";

export default function Footer (){
    return(
        <section className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="col-6">
                        <div className="col-six-wrapper">
                            <div className="footer-logo-part">
                                <Footerlogo />
                            </div>

                            <form action="index.html" className="form-part">
                                <label for="email">Talk to us:</label><br />
                                <input type="email" id="email" placeholder="hello@letsgavel.com" name="email"/>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-6">
                    <div className="footer-linkd">
                        <ul className="footer-link-left">
                            <li className="footer-list">
                                <a href="#AngelList" className="footer-link">AngelList</a>
                            </li>
                            <li className="footer-list">
                                <a href="#LinkedIn" className="footer-link">LinkedIn</a>
                            </li>
                            <li className="footer-list">
                                <a href="#Investor-Relations" className="footer-link">Investor Relations</a>
                            </li>
                            <li className="footer-list">
                                <a href="#Jobs" className="footer-link">Jobs</a>
                            </li>
                        </ul>

                        <ul className="footer-link-right">
                            <li className="footer-list">
                                <a href="#" className="footer-link">Data Protection &amp; Privacy</a>
                            </li>
                            <li className="footer-list">
                                <a href="#" className="footer-link">Terms of Use</a>
                            </li>
                            <li className="footer-list">
                                <a href="#" className="footer-link">Imprint &amp; Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-icon">
                        <ul className="ft-icons">
                            <li className="ft-list">
                                <a href="#" className="ft-icon"><Reddit /></a>
                            </li>
                            <li className="ft-list">
                                <a href="#" className="ft-icon"><Facebook /></a>
                            </li>
                            <li className="ft-list">
                                <a href="#" className="ft-icon"><Instagram /></a>
                            </li>
                            <li className="ft-list">
                                <a href="#" className="ft-icon"><Twitter /></a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}