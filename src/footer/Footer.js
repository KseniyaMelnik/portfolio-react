import React from "react";
import style from './Footer.module.scss';
import styleContainer from "../common/styles/style.module.css";
import codewars from "../assets/image/codewars.svg";
import github from "../assets/image/github.svg";
import linkedin from "../assets/image/linkedin.svg";
import telegram from "../assets/image/telegram.svg";



function Footer() {
    const codewarsStyle = {
        backgroundImage: `url(${codewars})`,
    };
    const githubStyle = {
        backgroundImage: `url(${github})`,
    };
    const linkedinStyle = {
        backgroundImage: `url(${linkedin})`,
    };
    const telegramStyle = {
        backgroundImage: `url(${telegram})`,
    };


    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                    <h2 className={style.title}>Kseniya Melnik</h2>
                <div className={style.block}>
                    <div style = {githubStyle} className={style.social}></div>
                    <div style = {linkedinStyle} className={style.social}></div>
                    <div style = {telegramStyle} className={style.social}></div>
                    <div style = {codewarsStyle} className={style.social}></div>
                </div>
                <div >
                    <span className={style.copyright}> @2021 all rights reserved </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;