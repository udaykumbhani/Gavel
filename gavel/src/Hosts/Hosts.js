import React from "react";
import { image } from "../image";
import "../Hosts/Hosts.scss"

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
                        <div className="host-col-main">
                            <div className="hosts-image-part">

                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

