import React from 'react';
import { Skill } from '../Skill'
import Dropdown from '../Dropdown';
import Footer from '../Footer';

const skillArray = [
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "title": "JavaScript"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        "title": "HTML"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "title": "CSS"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        "title": "jQuery"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
        "title": "bootstrap"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg",
        "title": "bulma"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "title": "node"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "title": "react"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "title": "express"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg",
        "title": "handlebars"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "title": "MySQL"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        "title": "sequelize"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "title": "mongoDB"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        "title": "webpack"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
        "title": "babel"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        "title": "bash"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        "title": "figma"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "title": "git"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        "title": "graphQL"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
        "title": "heroku"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        "title": "jest"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        "title": "npm"
    },
    {
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "title": "redux"
    }
]

const skills = () => {
    return (
        <div>
            <Dropdown />
            <div className="skillSection">
                <div className="skill-icons">
                    {skillArray.map(x => {
                        return (
                            <Skill img={x.img} title={x.title}></Skill>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default skills;