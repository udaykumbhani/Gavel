import React from "react";
import { image } from "../image";
import "../Joinus/Joinus.scss";

export default function Joinus(){
    return(
        <section className="joinus">
            <div className="container">
                <div className="joinus-wrapper">
                    <div className="joinus-col">
                        <h2 className="joinus-heading">Join us on <span className="joinus-span">Discord</span> </h2>
                        <div className="joinus-image">
                        <img src={image.Joinusimg} alt='Joinus_image' className="joinus-img"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}