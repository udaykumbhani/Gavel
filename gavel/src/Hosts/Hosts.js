import React from "react";
import { image } from "../image";
import "../Hosts/Hosts.scss";

import { ReactComponent as Right } from "../images/right.svg";
import { ReactComponent as Rightarrowimg } from "../images/Rightarrowimg.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Hosts(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        
       
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: true,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
      };
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
                    <Slider {...settings}>
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

                    </Slider>
                        </div>
                        <div className="custom-rightarrow">
                            <Rightarrowimg />
                        </div>
                </div>
            </div>
        </section>
    )
}

