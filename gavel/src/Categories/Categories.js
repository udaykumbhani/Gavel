import React from "react";
import { image } from "../image";
import "../Categories/Categories.scss";

export default function Categories (){
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
                    <div className="categories-bottom-col">
                        <div className="categories-content">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}