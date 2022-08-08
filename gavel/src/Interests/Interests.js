import React from "react";
import { image } from "../image";
import "../Interests/Interests.scss";

import { ReactComponent as Pencile } from "../images/Pencile.svg";

export default function Interests (){
    return(
        <section className="interests">
            <div className="container">
                <div className="interests-top-wrapper">
                    <div className="interests-top-col">
                        <h1 className="interests-heading">Interests</h1>
                    </div>
                    <div className="interests-top-col">
                        <button className="interests-btn"><Pencile /></button>
                    </div>
                </div>

                <div className="interests-bottom-wrapper">
                    <div className="interests-main">
                        <button className="interests-btn">#Anime&amp;manga</button>
                        <button className="interests-btn">#Comic&amp;Book</button>
                        <button className="interests-btn">#Sport</button>
                        <button className="interests-btn">#VIdeogames</button>
                        <button className="interests-btn">#Fashion</button>
                        <button className="interests-btn">#Anime&amp;manga</button>
                        <button className="interests-btn">#Movies&amp;shows</button>
                        <button className="interests-btn">#Comic&amp;Book</button>
                        <button className="interests-btn">#Sport</button>
                        <button className="interests-btn">#Fashion</button>
                        <button className="interests-btn">#Movies&amp;shows</button>
                        <button className="interests-btn">#VIdeogames</button>
                        <button className="interests-btn">#Sport</button>
                        <button className="interests-btn">#VIdeogames</button>
                        <button className="interests-btn">#Fashion</button>
                    </div>
                </div>
            </div>
        </section>
    )
}