import React from 'react';
import {Outlet} from "react-router-dom";
import styles from "./Layout.module.css";
import {CustomLink} from "../CustomLink/CustomLink";

const Layout = () => {


  return (
    <div>
        <div className={styles.mainDiv}>
            <header>
                <CustomLink to={'/'}>
                    <div className={styles.linkDiv}>
                        Home
                    </div>
                </CustomLink>
                <CustomLink to={'/about'}>
                    <div className={styles.linkDiv}>
                        About
                    </div>
                </CustomLink>
                <CustomLink to={'/blog'}>
                    <div className={styles.linkDiv}>
                        Blog
                    </div>
                </CustomLink>
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