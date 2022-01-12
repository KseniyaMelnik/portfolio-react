import React from "react";
import style from './Projects.module.css';
import styleContainer from './../common/style.module.css'
import Project from "./Project";

function Projects() {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.title}>
                    <h2>My projects</h2>
                </div>
                <div className={style.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;