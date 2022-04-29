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
import materialIcon from "../assets/image/material-ui-icon.svg";
import antIcon from "../assets/image/ant-design-icon.svg";



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
    const axiosStyle = {
        backgroundImage: `url(${axiosIcon})`,
    };
    const materialStyle = {
        backgroundImage: `url(${materialIcon})`,
    };
    const antStyle = {
        backgroundImage: `url(${antIcon})`,
    };


    return (
        <div id={'skills'} className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill style = {jsStyle} title='JS' description={"Frontend development"}/>
                    <Skill style = {cssStyle} title='CSS' description={"Styles"}/>
                    <Skill style = {htmlStyle} title='HTML' description={"Markup"}/>
                    <Skill style = {tsStyle} title='TS' description={"Typing"}/>
                    <Skill style = {reactStyle} title='REACT' description={"UI development"}/>
                    <Skill style = {reduxStyle} title='REDUX' description={"State management"}/>
                    <Skill style = {axiosStyle} title='AXIOS' description={"REST API"}/>
                    <Skill style = {materialStyle} title='MATERIAL UI' description={"React components"}/>
                    <Skill style = {antStyle} title='ANT DESIGN' description={"React components"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;