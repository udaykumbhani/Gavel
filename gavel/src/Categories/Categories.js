import React from "react";
import { image } from "../image";
import "../Categories/Categories.scss";

import { ReactComponent as Rightarrowimg } from "../images/Rightarrowimg.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Categories (){
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
                slidesToShow: 3,
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
        <section className="categories">
            <div className="container">
                <div className="categories-top-wrapper">
                    <div className="categories-top-col">
                        <h1 className="categories-heading">All Categories</h1>
                    </div>
                    <div className="categories-top-col">
                        <button className="categories-btn">View All</button>
                    </div>
                </div>

                <div className="categories-bottom-wrapper">
                    <div className="categories-col">
                        <Slider {...settings}>
                            <div className="categories-box">
                                <div className="categories-img-part">
                                    <img src={image.Pokemon} alt='Pokemon_image' className="categories-img"></img>
                                </div>
                                <div className="box-text">
                                    <h3 className="box-heading">Pokemon</h3>
                                </div>
                                <div className="box-shape"></div>
                            </div>

                            <div className="categories-box">
                                <div className="categories-img-part">
                                    <img src={image.FunkoPop} alt='FunkoPop_image' className="categories-img"></img>
                                </div>
                                <div className="box-text">
                                    <h3 className="box-heading">Funko Pop</h3>
                                </div>
                                <div className="box-shape"></div>
                            </div>

                            <div className="categories-box">
                                <div className="categories-img-part">
                                    <img src={image.Actionfigure} alt='Actionfigure_image' className="categories-img"></img>
                                </div>
                                <div className="box-text">
                                    <h3 className="box-heading">Action  figure</h3>
                                </div>
                                <div className="box-shape"></div>
                            </div>

                            <div className="categories-box">
                                <div className="categories-img-part">
                                    <img src={image.FunkoPop} alt='FunkoPop_image' className="categories-img"></img>
                                </div>
                                <div className="box-text">
                                    <h3 className="box-heading">Username</h3>
                                </div>
                                <div className="box-shape"></div>
                            </div>

                            <div className="categories-box">
                                <div className="categories-img-part">
                                    <img src={image.Pokemon} alt='Pokemon_image' className="categories-img"></img>
                                </div>
                                <div className="box-text">
                                    <h3 className="box-heading">Pokemon</h3>
                                </div>
                                <div className="box-shape"></div>
                            </div>

                            <div className="categories-box">
                                <div className="categories-img-part">
                                    <img src={image.FunkoPop} alt='FunkoPop_image' className="categories-img"></img>
                                </div>
                                <div className="box-text">
                                    <h3 className="box-heading">Funko Pop</h3>
                                </div>
                                <div className="box-shape"></div>
                            </div>

                            <div className="categories-box">
                                <div className="categories-img-part">
                                    <img src={image.Actionfigure} alt='Actionfigure_image' className="categories-img"></img>
                                </div>
                                <div className="box-text">
                                    <h3 className="box-heading">Action  figure</h3>
                                </div>
                                <div className="box-shape"></div>
                            </div>

                            <div className="categories-box">
                                <div className="categories-img-part">
                                    <img src={image.FunkoPop} alt='FunkoPop_image' className="categories-img"></img>
                                </div>
                                <div className="box-text">
                                    <h3 className="box-heading">Username</h3>
                                </div>
                                <div className="box-shape"></div>
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