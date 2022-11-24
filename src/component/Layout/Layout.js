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

    const logout = async ()=>{
        const request = await fetch('http://localhost:8009/disconnect', {      headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },    
            method:"POST"

        })
        const datajson = await request.json()
        console.log(datajson)
        context.setAuth(false, {})
    }
    return (
        <>
        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
            {mobile ? <ImCross color={"white"} /> : <FaBars color={"white"}/>}
        </button>
        <nav className="navBar">

            <div className="logo">
                <img src={img} />
            </div>


            <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to="/"><li>Accueil</li></Link>
                <Link to='/Progres'> <li>Données</li></Link>
                <Link to='/Ajouter'><li>Ajouter</li></Link>
                <Link to='/Contact'><li>Contact</li></Link>
                <li onClick={logout} style={{color:' red '}}>Déconnexion</li>
            </ul>

            <div className="account-info">
                <div className="account-info-picture">
                    <img src={imgUser}></img>
                </div>
                <div className="account-info-name">{context.user.firstname} {context.user.surname}</div>
            </div>
        </nav>
        </>


    )
}

export default HCLayout