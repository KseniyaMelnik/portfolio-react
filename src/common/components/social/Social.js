import React from "react";
import style from './Social.module.scss';


function Social(props) {
    return (
        <div style = {props.style} className={style.social}></div>

    );
}

export default Social;