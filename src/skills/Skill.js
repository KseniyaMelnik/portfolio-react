import React from "react";
import style from './Skills.module.css';

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.card}>
                <div className={style.icon}></div>
                <h3>{props.title}</h3>
            </div>
            <div className={style.description}>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

export default Skill;