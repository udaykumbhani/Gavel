import React from 'react';
import { image } from "../image";
import "../Header/Header.scss";
import { ReactComponent as Logo } from "../images/logo-img.svg";
import { ReactComponent as Video } from "../images/Video.svg";
import { ReactComponent as Card } from "../images/card.svg";
import { ReactComponent as Message } from "../images/Message.svg";
import { ReactComponent as Search } from "../images/Search.svg";
import { ReactComponent as Bell } from "../images/bell.svg";



export default function Header(){
    return(
        <header classname='header-section'>
            <div className='header-wrapper'>
                <div className='logo-part'>
                <a href='index.html' className='logo-link'><Logo /></a>
                </div>
                <div className='header-menubar'>
                    <ul className='nav-bar'>
                        <li className='nav-list'>
                            <a href='javascript:void(0)' className='nav-link'><Video />Show</a>
                        </li>
                        <li className='nav-list'>
                            <a href='javascript:void(0)' className='nav-link'><Card />Cards</a>
                        </li>
                        <li className='nav-list'>
                            <a href='javascript:void(0)' className='nav-link'><Message />Chat</a>
                        </li>
                        <li className='nav-list'>
                            <a href='javascript:void(0)' className='nav-link'><Search />Discover</a>
                        </li>
                    </ul>
                    <div className='account'>
                        <a href='javascript:void(0)' className='notification'>
                            <Bell/>
                            <div className='satus'></div>
                        </a>
                        <a href='javascript:void(0)' className='account-profile'>
                            <button className='ac-btn'>
                                <div className='profile-bg'><img src={image.profile} alt='profile_image'></img></div>
                                
                            <span className='ac-text'>Adam 007</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}