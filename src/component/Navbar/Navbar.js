import React from 'react'
import styles from "./Navbar.module.css"
import {Link} from 'react-router-dom'
import img from "../../assets/MPY.png"

function NavBar() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.navbarContent}>
        <div className={styles.navTitle}>
            <img src={img} alt="logo"/>
        </div>
        <ul className={styles.nav}>
            <Link to="/Login" {...styles.navLink}>Connexion</Link>
            <Link to="/signup" {...styles.navLink}>Inscription</Link>
        </ul>
    </div>
</nav>
  )
}

export default NavBar