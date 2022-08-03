import React from 'react';
import styles from "../layout/Layout.module.css";
import {NavLink} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {

    const setActive = ({isActive}) => isActive ? styles.activeLink : styles.link;


    return (
        <div>
            <NavLink
                to={to}
                className={setActive}
                {...props}
            >
                {children}
            </NavLink>
        </div>
    )
}

export {CustomLink}