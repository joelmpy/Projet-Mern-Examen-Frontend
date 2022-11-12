import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

import img from "../../assets/MPY.png"
import imgUser from "../../assets/img-bd.avif"
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'
import { useContext } from 'react'
import { User } from '../../App'

const HCLayout = () => {
    const context = useContext(User)
    const [mobile, setMobile] = useState(false)

    return (



        <nav className="navBar">

            <div className="logo">
                <img src={img} />
            </div>


            <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to="/"><li>Home</li></Link>
                <Link to='/Progres'> <li>Données</li></Link>
                <Link to='/Ajouter'><li>Ajouter</li></Link>
                <Link to='/Contact'><li>Contact</li></Link>
            </ul>

            <div className="account-info">
                <div className="account-info-picture">
                    <img src={imgUser}></img>
                </div>
                <div className="account-info-name">{context.user.firstname} {context.user.surname}</div>
            </div>

            <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
                {mobile ? <ImCross /> : <FaBars />}
            </button>

        </nav>


    )
}

export default HCLayout