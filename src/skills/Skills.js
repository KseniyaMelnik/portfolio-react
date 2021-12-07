import React from "react";
import style from './Skills.module.css';
import Skill from "./Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
        <div className={style.container}>
            <div className={style.text}>
                <span>My skills</span>
            </div>
            <div className={style.skillsContainer}>
                <Skill />
                <Skill />
                <Skill />
            </div>
        </div>
        </div>
    );
}

export default Skills;