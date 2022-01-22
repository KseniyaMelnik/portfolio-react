import React from "react";
import style from './Footer.module.scss';
import styleContainer from "../common/styles/style.module.css";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                    <h2 className={style.title}>Kseniya Melnik</h2>
                <div className={style.block}>
                    <div className={style.fragment}></div>
                    <div className={style.fragment}></div>
                    <div className={style.fragment}></div>
                    <div className={style.fragment}></div>
                </div>
                <div >
                    <span className={style.copyright}> @2021 Все права защищены</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;