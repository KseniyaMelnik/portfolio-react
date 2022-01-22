import React from "react";
import style from './Skills.module.scss';
import Skill from "./Skill";
import styleContainer from "../common/styles/style.module.css";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"My skills"}/>
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