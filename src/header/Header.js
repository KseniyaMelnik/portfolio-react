import React from "react";
import style from './Header.module.scss';
import Nav from "../nav/Nav";

function Header() {
    return (
        <div  id ={'home'} className={style.header}>
            <Nav />
        </div>
    );
}

export default Header;