import React from "react";
import style from './Projects.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.card}>
                <div className={style.image} style={props.style}>
                    <div className={style.btn}>
                        <a>Watch</a>
                    </div>
                </div>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}

export default Project;