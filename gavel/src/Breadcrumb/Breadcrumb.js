import React from "react";
import "../Breadcrumb/Breadcrumb.scss";

export default function Breadcrumb(){
    return(
        <section className="Breadcrumb">
            <div className="breadcrumb-main">
            <div className="breadcrumb-wrapper">
                <div className="breadcrumb-col">
                    <h1 className="heading-title">Show</h1>
                </div>
                <div className="breadcrumb-col">
                    <button className="btn-primary bread-btn">CREATE SHOW</button>
                </div>
            </div>
            </div>
        </section>
    )
}