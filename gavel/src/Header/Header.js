import React from 'react';
// import { image } from "../image";
import "../Header/Header.css";
import { ReactComponent as Logo } from "../images/logo-img.svg";
import { ReactComponent as Video } from "../images/Video.svg";
import { ReactComponent as Card } from "../images/card.svg";
import { ReactComponent as Message } from "../images/Message.svg";
import { ReactComponent as Search } from "../images/Search.svg";
import { ReactComponent as Bell } from "../images/bell.svg";
import { ReactComponent as Profile } from "../images/profile.svg";


export default function Header(){
    return(
        <header classname='header-section'>
            <div className='header-wrapper'>
                <div className='logo-part'>
                    <Logo />
                </div>
                <div className='header-menubar'>
                    <ul className='nav-bar'>
                        <li className='nav-list'>
                            <a className='nav-link'><Video />Show</a>
                        </li>
                        <li className='nav-list'>
                            <a className='nav-link'><Card />Show</a>
                        </li>
                        <li className='nav-list'>
                            <a className='nav-link'><Message />Show</a>
                        </li>
                        <li className='nav-list'>
                            <a className='nav-link'><Search />Show</a>
                        </li>
                    </ul>
                    <div className='account'>
                        <div className='notification'>
                            <Bell/>
                            <div className='satus'></div>
                        </div>
                        <div className='account-profile'>
                            <btn className='ac-btn'><span className='ac-bg'><Profile/></span>Adam 007</btn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}