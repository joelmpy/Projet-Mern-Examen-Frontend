import React from 'react'
import styles from "./Navbar.module.css"
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.navbarContent}>
        <div className={styles.navTitle}>
            <h2>Logo</h2>
        </div>
        <ul className={styles.nav}>
            <Link to="/Login" {...styles.navLink}>Login</Link>
            <Link to="/signup" {...styles.navLink}>Signup</Link>
        </ul>
    </div>
</nav>
  )
}

export default NavBar