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
    const codewarsLink = 'https://www.codewars.com/users/KseniyaMelnik'

    const githubStyle = {
        backgroundImage: `url(${github})`,
    };
    const githubLink = 'https://github.com/KseniyaMelnik'
    const linkedinStyle = {
        backgroundImage: `url(${linkedin})`,
    };
    const linkedinLink = 'https://www.linkedin.com/in/kseniya-m-784ab71b3/'
    const telegramStyle = {
        backgroundImage: `url(${telegram})`,
    };
    const telegramLink = 'https://t.me/MurlocKsu'


    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <a className={style.titleLink} href="#home"><p className={style.title}>Kseniya Melnik</p></a>
                <div className={style.block}>
                    <Social link = {githubLink} style={githubStyle}/>
                    <Social link = {linkedinLink} style = {linkedinStyle}/>
                    <Social link = {telegramLink} style = {telegramStyle}/>
                    <Social link = {codewarsLink} style = {codewarsStyle} />
                </div>
                <div >
                    <p className={style.copyright}> @2021 all rights reserved </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;