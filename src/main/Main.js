import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/style.module.css'
import avatar from "../assets/image/avatar.jpg"


function Main() {
    const avatarStyle = {
        backgroundImage: `url(${avatar})`,
    };
    return (
        <div id={'main'} className={style.main}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1 className={style.title}>I am Kseniya Melnik</h1>
                    <span>Frontend developer</span>
                </div>
                <div style={avatarStyle} className={style.photo}>
                </div>

            </div>
        </div>
    );
}

export default Main;