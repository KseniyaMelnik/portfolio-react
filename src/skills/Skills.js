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
        <div id={'skills'} className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"My skills"}/>
                <div className={style.skills}>
                    <Skill style = {jsStyle} title='JS' description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta"}/>
                    <Skill style = {cssStyle} title='CSS' description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta"}/>
                    <Skill style = {reactStyle} title='REACT' description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;