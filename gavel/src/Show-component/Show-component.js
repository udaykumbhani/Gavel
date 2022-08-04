import React from "react";
import "../Show-component/Show-component.scss";

export default function Showcomponent(){
    return(
        <section className="show-component">
            <div className="container">
                <div className="show-top-wrapper">
                    <div className="show-top-col">
                        <h1 className="heading">Live Show</h1>
                    </div>
                    <div className="show-top-col">
                        <button className="show-btn">View All</button>
                    </div>
                </div>
            </div>
        </section>
    )
}