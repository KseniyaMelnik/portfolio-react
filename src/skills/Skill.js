import React from "react";
import style from './Skills.module.scss';

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.card}>
                <div className={style.icon} style={props.style}></div>
                <h3 className={style.skillTitle}>{props.title}</h3>
            </div>
            <div className={style.description}>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

export default Skill;