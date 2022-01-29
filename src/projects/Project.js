import React from "react";
import style from './Projects.module.scss';
import Button from "../common/components/buttons/Button";

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.card}>
                <div className={style.image} style={props.style}>
                    <Button />
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