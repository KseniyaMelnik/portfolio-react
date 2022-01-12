import React from "react";
import style from './Projects.module.css';

function Project() {
    return (
        <div className={style.project}>
            <div className={style.card}>
                <div className={style.image}>
                    <div className={style.btn}>
                        <a>Watch</a>
                    </div>
                </div>
            </div>
            <div className={style.text}>
                <h3 className={style.projectTitle}>Project title</h3>
                <div className={style.description}>Description</div>
            </div>
        </div>
    );
}

export default Project;