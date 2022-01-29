import React from "react";
import style from './Button.module.scss';


function Button( props) {
    const onClick = () => {
        document.location.href = props.url;
    }

    return <div className={style.button}>
        <button onClick={onClick}>{props.text}</button>
        </div>
}

export default Button;