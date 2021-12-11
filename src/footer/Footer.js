import React from "react";
import style from './Footer.module.css';

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div>
                    <span className={style.title}>Kseniya Melnik</span>
                </div>
                <div className={style.footerBlock}>
                    <div className={style.footerFragment}></div>
                    <div className={style.footerFragment}></div>
                    <div className={style.footerFragment}></div>
                    <div className={style.footerFragment}></div>
                </div>
                <div >
                    <span className={style.copyright}> @2021 Все права защищены</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;