import React from "react";
import style from './Projects.module.css';
import styleContainer from './../common/style.module.css'
import Project from "./Project";
import Title from "../common/components/title/Title";

function Projects() {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title />
                <div className={style.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;