import React from "react";
import style from './Skills.module.css';

function Skill() {
    return (
        <div className={style.skill}>
            <div className={style.skillCard}>
                <div className={style.skillIcon}></div>
                <h2>React</h2>
            </div>
            <div className={style.skillDescription}>"
                <span>Подробное описание навыка</span>
            </div>
        </div>
    );
}

export default Skill;