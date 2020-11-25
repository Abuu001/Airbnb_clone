import React from 'react'
import Logo from "../assets/airbnblogo.png"
import SearchIcon from '@material-ui/icons/Search';
import thumbnail1 from "../assets/thumbnail1.jpeg"
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import "./Header.css"

function Header() {
    return (
        <div  className="header">
             <img className="header__Icon" src={Logo}  alt="airbnb logo"  />
             <div  className="header__centre" >
                <input type="text" />
                <SearchIcon />
             </div>
             <div  className="header__right">
                <p>Become a host </p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
             </div>
        </div>
    )
}

export default Header
