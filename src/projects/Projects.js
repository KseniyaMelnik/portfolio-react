import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/style.module.css'
import Project from './Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/todolist.jpg';
import socialImage from './../assets/image/sotial-network.jpg'
import wildImage from './../assets/image/wildlife.jpg'
import drumImage from './../assets/image/drumkit.jpg'
import shelterImage from './../assets/image/shelter.jpg'

function Projects() {
    const socialStyle = {
        backgroundImage: `url(${socialImage})`,
    };
    const todoStyle = {
        backgroundImage: `url(${todoImage})`,
    };
    const wildStyle = {
        backgroundImage: `url(${wildImage})`,
    };
    const drumStyle = {
        backgroundImage: `url(${drumImage})`,
    };
    const shelterStyle = {
        backgroundImage: `url(${shelterImage})`,
    };


    return (
        <div id={'projects'} className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project url={"https://kseniyamelnik.github.io/React-Sotial/#/login"} style={socialStyle} title={"Social network"} description={"It's something description for the project"}/>
                    <Project url={"https://kseniyamelnik.github.io/todo-list/#/login"} style={todoStyle} title={"Todo list"} description={"It's something description for the project"}/>
                    <Project url={"https://rolling-scopes-school.github.io/kseniyamelnik-JSFE2021Q1/wildlife/"} style={wildStyle} title={"Wild life"} description={"It's something description for the project"}/>
                    <Project url={"https://rolling-scopes-school.github.io/kseniyamelnik-JSFEPRESCHOOL/drum-kit/"}style={drumStyle} title={"Drum kit"} description={"It's something description for the project"}/>
                    <Project url={"https://rolling-scopes-school.github.io/kseniyamelnik-JSFE2022Q1/shelter/main/"}style={shelterStyle} title={"Shelter"} description={"It's something description for the project"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;