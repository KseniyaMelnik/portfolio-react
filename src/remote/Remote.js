import React from "react";
import style from './Remote.module.scss';
import styleContainer from "../common/styles/style.module.css";
import Button from "../common/components/buttons/Button";

function Remote() {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>I am available for freelance</h2>
                 <Button text={"Hire me"}/>
            </div>
        </div>
    );
}

export default Remote;