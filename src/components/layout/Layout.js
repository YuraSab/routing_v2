import React from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {

  return (
    <div>
        <div className={styles.mainDiv}>
            <header>
                <Link className={styles.link} to={'/'}>
                    <div className={styles.linkDiv}>
                        Home
                    </div>
                </Link>
                <Link className={styles.link} to={'/about'}>
                    <div className={styles.linkDiv}>
                        About
                    </div>
                </Link>
                <Link className={styles.link} to={'/blog'}>
                    <div className={styles.linkDiv}>
                        Blog
                    </div>
                </Link>
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