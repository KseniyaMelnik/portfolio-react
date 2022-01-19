import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/style.module.css'
import Project from './Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/todolist.jpg';
import socialImage from './../assets/image/sotial-network.jpg'

function Projects() {
    const socialStyle = {
        backgroundImage: `url(${socialImage})`,
    };
    const todoStyle = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"My projects"}/>
                <div className={style.projects}>
                    <Project style={socialStyle} title={"Social network"} description={"It's something description for the project"}/>
                    <Project style={todoStyle} title={"Todo list"} description={"It's something description for the project"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;