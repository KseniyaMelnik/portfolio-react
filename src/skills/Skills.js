import React from "react";
import style from './Skills.module.css';
import Skill from "./Skill";
import styleContainer from "../common/style.module.css";

function Skills() {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                    <h2>My skills</h2>
                <div className={style.skills}>
                    <Skill title='JS' description={"Здесь будет описание навыка"}/>
                    <Skill title='CSS' description={"Здесь будет описание навыка"}/>
                    <Skill title='REACT' description={"Здесь будет описание навыка"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;