import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {

  return (
    <div>
        <div className={styles.mainDiv}>
            <header>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to={'/'}>
                    <div className={styles.linkDiv}>
                        Home
                    </div>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to={'/about'}>
                    <div className={styles.linkDiv}>
                        About
                    </div>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to={'/blog'}>
                    <div className={styles.linkDiv}>
                        Blog
                    </div>
                </NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    </div>
  )
}

export { Layout }