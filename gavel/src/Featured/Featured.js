import React from "react";
import { image } from "../image";
import "../Featured/Featured.scss";
import Showcomponent from "../Show-component/Show-component";
import Joinus from "../Joinus/Joinus";
import Hosts from "../Hosts/Hosts";
import Interests from "../Interests/Interests";
import Categories from "../Categories/Categories";

export default function Featured(){
    return(
        <>
        <section><Showcomponent
            heading={"Live Show"}
            prilanguage={"English Show"}
            seclanguage={"German Show"}
         /></section>

        <section><Showcomponent 
            heading={"Feature Show"} 
            prilanguage={"German Show"}
            seclanguage={"German Show"}
        /></section>

        <section><Joinus/></section>
           
        <section><Showcomponent 
            heading={"Upcoming Show"} 
            prilanguage={"German Show"}
            seclanguage={"German Show"}
        /></section>

        <Hosts />

        <Interests/>

        <Categories />

        </>
    )
}