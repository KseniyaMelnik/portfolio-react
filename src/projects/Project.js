import React from "react";
import style from './Projects.module.css';

function Project() {
    return (
        <div className={style.project}>
            <div className={style.projectCard}>
                <div className={style.projectImage}></div>
                <div className={style.projectButton}>Watch</div>
            </div>
            <div className={style.projectText}>
                <h2>Project title</h2>
                <div className={style.projectDescription}>Description</div>
            </div>
        </div>
    );
}

export default Project;