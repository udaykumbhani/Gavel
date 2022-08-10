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
                    <div className="categories-col">
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
                    </div>
                </div>
            </div>
        </section>
    )
}