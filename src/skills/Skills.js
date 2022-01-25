import React from "react";
import style from './Skills.module.scss';
import Skill from "./Skill";
import styleContainer from "../common/styles/style.module.css";
import Title from "../common/components/title/Title";
import jsIcon from "../assets/image/js-icon.svg";
import cssIcon from "../assets/image/css-icon.svg";
import reactIcon from "../assets/image/react-icon.svg";



function Skills() {
    const jsStyle = {
        backgroundImage: `url(${jsIcon})`,
    };
    const cssStyle = {
        backgroundImage: `url(${cssIcon})`,
    };
    const reactStyle = {
        backgroundImage: `url(${reactIcon})`,
    };

    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"My skills"}/>
                <div className={style.skills}>
                    <Skill style = {jsStyle} title='JS' description={"Здесь будет описание навыка"}/>
                    <Skill style = {cssStyle} title='CSS' description={"Здесь будет описание навыка"}/>
                    <Skill style = {reactStyle} title='REACT' description={"Здесь будет описание навыка"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;