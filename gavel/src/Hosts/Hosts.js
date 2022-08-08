import React from "react";
import { image } from "../image";
import "../Hosts/Hosts.scss";

import { ReactComponent as Right } from "../images/right.svg";


export default function Hosts(){
    return(
        <section className="hosts">
            <div className="container">
                <div className="hosts-top-wrapper">
                    <div className="hosts-top-col">
                        <h1 className="hosts-heading">Popular Hosts</h1>
                    </div>
                    <div className="hosts-top-col">
                        <button className="hosts-btn">View All</button>
                    </div>
                </div>

                <div className="hosts-bottom-wrapper">
                    <div className="hosts-bottom-col">
                        <div className="host-content-main">
                            <div className="hosts-image-part">
                                <img src={image.personelogo} alt='profile_image' className="personelogo-img"></img>
                            </div>
                            <div className="account-persone-name">
                                <p className="ac-name">Thox <Right /></p>
                                <p className="ac-follower">4.7 k followers</p>
                            </div>
                            <div className="hosts-btn-part">
                                <button className="follow-btn">+ Follow</button>
                            </div>
                            <div className="hosts-overlay">
                                <div className="host-first-desigen"></div>
                                <div className="host-second-desigen"></div>
                            </div>
                        </div>

                        <div className="host-content-main">
                            <div className="hosts-image-part">
                                <img src={image.personelogo} alt='profile_image' className="personelogo-img"></img>
                            </div>
                            <div className="account-persone-name">
                                <p className="ac-name">john787 <Right /></p>
                                <p className="ac-follower">4.7 k followers</p>
                            </div>
                            <div className="hosts-btn-part">
                                <button className="follow-btn">+ Follow</button>
                            </div>
                            <div className="hosts-overlay">
                                <div className="host-first-desigen"></div>
                                <div className="host-second-desigen"></div>
                            </div>
                        </div>

                        <div className="host-content-main">
                            <div className="hosts-image-part">
                                <img src={image.personelogo} alt='profile_image' className="personelogo-img"></img>
                            </div>
                            <div className="account-persone-name">
                                <p className="ac-name">Justin78 <Right /></p>
                                <p className="ac-follower">4.7 k followers</p>
                            </div>
                            <div className="hosts-btn-part">
                                <button className="follow-btn">+ Follow</button>
                            </div>
                            <div className="hosts-overlay">
                                <div className="host-first-desigen"></div>
                                <div className="host-second-desigen"></div>
                            </div>
                        </div>

                        <div className="host-content-main">
                            <div className="hosts-image-part">
                                <img src={image.personelogo} alt='profile_image' className="personelogo-img"></img>
                            </div>
                            <div className="account-persone-name">
                                <p className="ac-name">Thox <Right /></p>
                                <p className="ac-follower">4.7 k followers</p>
                            </div>
                            <div className="hosts-btn-part">
                                <button className="follow-btn">+ Follow</button>
                            </div>
                            <div className="hosts-overlay">
                                <div className="host-first-desigen"></div>
                                <div className="host-second-desigen"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

