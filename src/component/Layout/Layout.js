import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import img from "../../assets/MPY.png"
import btnImg from "../../assets/menu-btn.png"
import imgUser from "../../assets/img-bd.avif"
import {useContext} from 'react'
import {User} from '../../App'

const HCLayout = () => {
    const context = useContext(User)
    return (
            <nav className="navBar">
                <div className="logo">
                    <img src={img} />
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/Progres'>Progression</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/Ajouter'>Ajouter</Link></li>
                    </ul>
                </div>
                <img src={btnImg} className="menu-hamburger" />


            <div className="account-info">
                <div className="account-info-picture">
                    <img src={imgUser}></img>
                </div>
                <div className="account-info-name">{context.user.firstname} {context.user.surname}</div>
            </div>

            </nav>


    )
}

export default HCLayout