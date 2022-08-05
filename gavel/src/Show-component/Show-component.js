import React from "react";
import { image } from "../image";
import "../Show-component/Show-component.scss";
import { ReactComponent as View } from "../images/View.svg";
import { ReactComponent as Live } from "../images/Live.svg";
import { ReactComponent as Share } from "../images/Share.svg";
import { ReactComponent as Saved } from "../images/Saved.svg";
import { ReactComponent as Right } from "../images/right.svg";
import { ReactComponent as Rightarrowimg } from "../images/Rightarrowimg.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Showcomponent({heading, prilanguage, seclanguage }){
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        // centerPadding: '32px',
       
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
        <section className="show-component">
            <div className="container">
                <div className="show-top-wrapper">
                    <div className="show-top-col">
                        <h1 className="heading">{heading}</h1>
                    </div>
                    <div className="show-top-col">
                        <button className="show-btn">View All</button>
                    </div>
                </div>


                <div className="show-bottom-wrapper">
                    <Slider {...settings}>
                        <div className="show-bottom-col">
                            <div className="show-image-part">
                                <img src={image.showimg_one} alt='profile_image' className="show-image-card"></img>
                                    <div className="btns-col">
                                        <button className="story-view-btn">
                                        <View />
                                        <span className="story-view-text">54</span>
                                        </button>
                                        <button className="story-language-btn">{prilanguage}</button>
                                    </div>
                                    <div className="btns-second-col">
                                        <button className="live-btn">
                                            <Live />
                                            <span className="live-btn-text">Live</span>
                                        </button>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Share /></a>
                                        </div>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Saved /></a>
                                        </div>
                                    </div>
                                <div className="overlay-part">
                                    <div className="account-part">
                                        <div className="account-col">
                                            <div className="account-persone-image">
                                                <img src={image.Persone} alt='persone_img' className="persone-img"></img>
                                            </div>
                                            <div className="account-persone-name">
                                                <p className="ac-name">Thox <Right /></p>
                                                <p className="ac-follower">4.9k followers</p>
                                            </div>
                                        </div>
                                        <div className="account-col-second">
                                            <button className="following-btn">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading-content">
                                <p className="show-paragraph">
                                    Magic Booster Fun am 
                                    acchmiti <br />
                                    Grbobe an aktuellen...🎉🎉
                                    <span className="show-span">#Pokemon</span>
                                </p>
                            </div>
                        </div>

                        <div className="show-bottom-col">
                            <div className="show-image-part">
                                <img src={image.showimg_two} alt='profile_image' className="show-image-card"></img>
                                    <div className="btns-col">
                                        <button className="story-view-btn">
                                        <View />
                                        <span className="story-view-text">54</span>
                                        </button>
                                        <button className="story-language-btn">{prilanguage}</button>
                                    </div>
                                    <div className="btns-second-col">
                                        <button className="live-btn">
                                            <Live />
                                            <span className="live-btn-text">Live</span>
                                        </button>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Share /></a>
                                        </div>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Saved /></a>
                                        </div>
                                    </div>
                                <div className="overlay-part">
                                    <div className="account-part">
                                        <div className="account-col">
                                            <div className="account-persone-image">
                                                <img src={image.Persone} alt='persone_img' className="persone-img"></img>
                                            </div>
                                            <div className="account-persone-name">
                                                <p className="ac-name">Thox <Right /></p>
                                                <p className="ac-follower">4.9k followers</p>
                                            </div>
                                        </div>
                                        <div className="account-col-second">
                                            <button className="following-btn">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading-content">
                                <p className="show-paragraph">
                                    Magic Booster Fun am 
                                    acchmiti <br />
                                    Grbobe an aktuellen...🎉🎉
                                    <span className="show-span">#Pokemon</span>
                                </p>
                            </div>
                        </div>

                        <div className="show-bottom-col">
                            <div className="show-image-part">
                                <img src={image.showimg_three} alt='profile_image' className="show-image-card"></img>
                                    <div className="btns-col">
                                        <button className="story-view-btn">
                                        <View />
                                        <span className="story-view-text">54</span>
                                        </button>
                                        <button className="story-language-btn">{seclanguage}</button>
                                    </div>
                                    <div className="btns-second-col">
                                        <button className="live-btn">
                                            <Live />
                                            <span className="live-btn-text">Live</span>
                                        </button>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Share /></a>
                                        </div>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Saved /></a>
                                        </div>
                                    </div>
                                <div className="overlay-part">
                                    <div className="account-part">
                                        <div className="account-col">
                                            <div className="account-persone-image">
                                                <img src={image.Persone} alt='persone_img' className="persone-img"></img>
                                            </div>
                                            <div className="account-persone-name">
                                                <p className="ac-name">Thox <Right /></p>
                                                <p className="ac-follower">4.9k followers</p>
                                            </div>
                                        </div>
                                        <div className="account-col-second">
                                            <button className="following-btn">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading-content">
                                <p className="show-paragraph">
                                    Magic Booster Fun am 
                                    acchmiti <br />
                                    Grbobe an aktuellen...🎉🎉
                                    <span className="show-span">#Pokemon</span>
                                </p>
                            </div>
                        </div>

                        <div className="show-bottom-col">
                            <div className="show-image-part">
                                <img src={image.showimg_foure} alt='profile_image' className="show-image-card"></img>
                                    <div className="btns-col">
                                        <button className="story-view-btn">
                                        <View />
                                        <span className="story-view-text">54</span>
                                        </button>
                                        <button className="story-language-btn">{seclanguage}</button>
                                    </div>
                                    <div className="btns-second-col">
                                        <button className="live-btn">
                                            <Live />
                                            <span className="live-btn-text">Live</span>
                                        </button>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Share /></a>
                                        </div>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Saved /></a>
                                        </div>
                                    </div>
                                <div className="overlay-part">
                                    <div className="account-part">
                                        <div className="account-col">
                                            <div className="account-persone-image">
                                                <img src={image.Persone} alt='persone_img' className="persone-img"></img>
                                            </div>
                                            <div className="account-persone-name">
                                                <p className="ac-name">Thox <Right /></p>
                                                <p className="ac-follower">4.9k followers</p>
                                            </div>
                                        </div>
                                        <div className="account-col-second">
                                            <button className="following-btn">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading-content">
                                <p className="show-paragraph">
                                    Magic Booster Fun am 
                                    acchmiti <br />
                                    Grbobe an aktuellen...🎉🎉
                                    <span className="show-span">#Pokemon</span>
                                </p>
                            </div>
                        </div>

                        <div className="show-bottom-col">
                            <div className="show-image-part">
                                <img src={image.showimg_one} alt='profile_image' className="show-image-card"></img>
                                    <div className="btns-col">
                                        <button className="story-view-btn">
                                        <View />
                                        <span className="story-view-text">54</span>
                                        </button>
                                        <button className="story-language-btn">{prilanguage}</button>
                                    </div>
                                    <div className="btns-second-col">
                                        <button className="live-btn">
                                            <Live />
                                            <span className="live-btn-text">Live</span>
                                        </button>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Share /></a>
                                        </div>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Saved /></a>
                                        </div>
                                    </div>
                                <div className="overlay-part">
                                    <div className="account-part">
                                        <div className="account-col">
                                            <div className="account-persone-image">
                                                <img src={image.Persone} alt='persone_img' className="persone-img"></img>
                                            </div>
                                            <div className="account-persone-name">
                                                <p className="ac-name">Thox <Right /></p>
                                                <p className="ac-follower">4.9k followers</p>
                                            </div>
                                        </div>
                                        <div className="account-col-second">
                                            <button className="following-btn">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading-content">
                                <p className="show-paragraph">
                                    Magic Booster Fun am 
                                    acchmiti <br />
                                    Grbobe an aktuellen...🎉🎉
                                    <span className="show-span">#Pokemon</span>
                                </p>
                            </div>
                        </div>

                        <div className="show-bottom-col">
                            <div className="show-image-part">
                                <img src={image.showimg_two} alt='profile_image' className="show-image-card"></img>
                                    <div className="btns-col">
                                        <button className="story-view-btn">
                                        <View />
                                        <span className="story-view-text">54</span>
                                        </button>
                                        <button className="story-language-btn">{prilanguage}</button>
                                    </div>
                                    <div className="btns-second-col">
                                        <button className="live-btn">
                                            <Live />
                                            <span className="live-btn-text">Live</span>
                                        </button>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Share /></a>
                                        </div>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Saved /></a>
                                        </div>
                                    </div>
                                <div className="overlay-part">
                                    <div className="account-part">
                                        <div className="account-col">
                                            <div className="account-persone-image">
                                                <img src={image.Persone} alt='persone_img' className="persone-img"></img>
                                            </div>
                                            <div className="account-persone-name">
                                                <p className="ac-name">Thox <Right /></p>
                                                <p className="ac-follower">4.9k followers</p>
                                            </div>
                                        </div>
                                        <div className="account-col-second">
                                            <button className="following-btn">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading-content">
                                <p className="show-paragraph">
                                    Magic Booster Fun am 
                                    acchmiti <br />
                                    Grbobe an aktuellen...🎉🎉
                                    <span className="show-span">#Pokemon</span>
                                </p>
                            </div>
                        </div>

                        <div className="show-bottom-col">
                            <div className="show-image-part">
                                <img src={image.showimg_three} alt='profile_image' className="show-image-card"></img>
                                    <div className="btns-col">
                                        <button className="story-view-btn">
                                        <View />
                                        <span className="story-view-text">54</span>
                                        </button>
                                        <button className="story-language-btn">{seclanguage}</button>
                                    </div>
                                    <div className="btns-second-col">
                                        <button className="live-btn">
                                            <Live />
                                            <span className="live-btn-text">Live</span>
                                        </button>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Share /></a>
                                        </div>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Saved /></a>
                                        </div>
                                    </div>
                                <div className="overlay-part">
                                    <div className="account-part">
                                        <div className="account-col">
                                            <div className="account-persone-image">
                                                <img src={image.Persone} alt='persone_img' className="persone-img"></img>
                                            </div>
                                            <div className="account-persone-name">
                                                <p className="ac-name">Thox <Right /></p>
                                                <p className="ac-follower">4.9k followers</p>
                                            </div>
                                        </div>
                                        <div className="account-col-second">
                                            <button className="following-btn">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading-content">
                                <p className="show-paragraph">
                                    Magic Booster Fun am 
                                    acchmiti <br />
                                    Grbobe an aktuellen...🎉🎉
                                    <span className="show-span">#Pokemon</span>
                                </p>
                            </div>
                        </div>

                        <div className="show-bottom-col">
                            <div className="show-image-part">
                                <img src={image.showimg_foure} alt='profile_image' className="show-image-card"></img>
                                    <div className="btns-col">
                                        <button className="story-view-btn">
                                        <View />
                                        <span className="story-view-text">54</span>
                                        </button>
                                        <button className="story-language-btn">{seclanguage}</button>
                                    </div>
                                    <div className="btns-second-col">
                                        <button className="live-btn">
                                            <Live />
                                            <span className="live-btn-text">Live</span>
                                        </button>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Share /></a>
                                        </div>
                                        <div className="share-btn">
                                            <a href="/" className="share-link"><Saved /></a>
                                        </div>
                                    </div>
                                <div className="overlay-part">
                                    <div className="account-part">
                                        <div className="account-col">
                                            <div className="account-persone-image">
                                                <img src={image.Persone} alt='persone_img' className="persone-img"></img>
                                            </div>
                                            <div className="account-persone-name">
                                                <p className="ac-name">Thox <Right /></p>
                                                <p className="ac-follower">4.9k followers</p>
                                            </div>
                                        </div>
                                        <div className="account-col-second">
                                            <button className="following-btn">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading-content">
                                <p className="show-paragraph">
                                    Magic Booster Fun am 
                                    acchmiti <br />
                                    Grbobe an aktuellen...🎉🎉
                                    <span className="show-span">#Pokemon</span>
                                </p>
                            </div>
                        </div>
                    
                    </Slider>
                    <div className="custom-rightarrow">
                        <Rightarrowimg />
                    </div>
                </div>
                    
            </div>
        </section>
    )
}
