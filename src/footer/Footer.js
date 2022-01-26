import React from "react";
import style from './Footer.module.scss';
import styleContainer from "../common/styles/style.module.css";
import codewars from "../assets/image/codewars.svg";
import github from "../assets/image/github.svg";
import linkedin from "../assets/image/linkedin.svg";
import telegram from "../assets/image/telegram.svg";
import Social from "../common/components/social/Social";



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
                    <Social style={githubStyle}/>
                    <Social style = {linkedinStyle}/>
                    <Social style = {telegramStyle}/>
                    <Social style = {codewarsStyle} />
                </div>
                <div >
                    <span className={style.copyright}> @2021 all rights reserved </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;