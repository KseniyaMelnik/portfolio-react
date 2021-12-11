import React from "react";
import style from './Remote.module.css';

function Remote() {
    return (
        <div className={style.remoteBlock}>
        <div className={style.container}>
            <div className={style.text}>
                <span>Рассматриваю варианты удаленной работы</span>
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button}>hire me</button>
            </div>
        </div>
        </div>
    );
}

export default Remote;