import React from "react";
import style from './Projects.module.css';
import Project from "./Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
        <div className={style.container}>
            <div className={style.text}>
                <span>My projects</span>
            </div>
            <div className={style.projectsContainer}>
                <Project />
                <Project />
            </div>
        </div>
        </div>
    );
}

export default Projects;