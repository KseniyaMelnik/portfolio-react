import React from "react";
import style from './Remote.module.scss';
import styleContainer from "../common/styles/style.module.css";

function Remote() {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>I am available for freelance</h2>
                <div className={style.buttonContainer}>
                    <button className={style.button}>hire me</button>
                </div>
            </div>
        </div>
    );
}

export default Remote;