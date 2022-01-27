import React from "react";
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href={'#main'}>Home</a>
            <a href={'#skills'}>Skills</a>
            <a href={'#projects'}>Projects</a>
            <a href={'#contact'}>Contact</a>
        </div>
    );
}

export default Nav;