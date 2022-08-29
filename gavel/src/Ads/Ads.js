import React from "react";
import { image } from "../image";
import "../Ads/Ads.scss";

export default function Ads (){
    return(
        <section className="ads-component">
            <div className="container">
                <div className="ads-wrapper">
                    <div className="ads-image-part">
                        <img src={image.ads} alt='ads_image' className="ads-img"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}