import React from "react";
import style from './Social.module.scss';


function Social(props) {
    return (
        <a href={props.link}><div style = {props.style} className={style.social}></div></a>

    );
}

export default Social;