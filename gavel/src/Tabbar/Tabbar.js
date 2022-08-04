import React from "react";
import "../Tabbar/Tabbar.scss";

export default function Tabbar(){
    return(
        <section className="tabbar">
            <div className="container">
            <div className="tab-box">
                <a href="javascript:void(0)" className="tab-link">All Languages</a>
                <a href="javascript:void(0)" className="tab-link">Only English</a>
                <a href="javascript:void(0)" className="tab-link">Only German</a>
            </div>
            </div>
        </section>
    )
}