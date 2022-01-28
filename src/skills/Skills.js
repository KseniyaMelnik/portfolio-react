import React from "react";
import style from './Skills.module.scss';
import Skill from "./Skill";
import styleContainer from "../common/styles/style.module.css";
import Title from "../common/components/title/Title";
import jsIcon from "../assets/image/js-icon.svg";
import cssIcon from "../assets/image/css-icon.svg";
import htmlIcon from "../assets/image/html-icon.svg";
import tsIcon from "../assets/image/typescript-icon.svg";
import reactIcon from "../assets/image/react-icon.svg";
import reduxIcon from "../assets/image/redux.svg";
import axiosIcon from "../assets/image/axios-icon.svg";



function Skills() {
    const jsStyle = {
        backgroundImage: `url(${jsIcon})`,
    };
    const cssStyle = {
        backgroundImage: `url(${cssIcon})`,
    };
    const htmlStyle = {
        backgroundImage: `url(${htmlIcon})`,
    };
    const tsStyle = {
        backgroundImage: `url(${tsIcon})`,
    };
    const reactStyle = {
        backgroundImage: `url(${reactIcon})`,
    };
    const reduxStyle = {
        backgroundImage: `url(${reduxIcon})`,
    };


    return (
        <div id={'skills'} className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"My skills"}/>
                <div className={style.skills}>
                    <Skill style = {jsStyle} title='JS' description={"Frontend development"}/>
                    <Skill style = {cssStyle} title='CSS' description={"Styles"}/>
                    <Skill style = {htmlStyle} title='HTML' description={"Markup"}/>
                    <Skill style = {tsStyle} title='TS' description={"Typing"}/>
                    <Skill style = {reactStyle} title='REACT' description={"UI development"}/>
                    <Skill style = {reduxStyle} title='REDUX' description={"State management"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;