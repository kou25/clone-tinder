import React from 'react'
import '../assests/css/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from "react-router-dom"

export default function Header({backButton}) {
    return (
        <div className='header'>
            {backButton?(
                <Link to={backButton}>
                <IconButton>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" /> 
               </IconButton>
               </Link>
            ):
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            }
            <Link to="/">
            <img
            className="header__logo"
            src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
            alt="logo"
            />
            </Link>
            <Link to="/chats">
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
            </Link>
        </div>
    )
}
