import React from "react";
import style from './Button.module.scss';


function Button(props) {
    return <div className={style.button}>
            <button>Watch</button>
        </div>
}

export default Button;