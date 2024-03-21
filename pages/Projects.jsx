import React from "react"
import projectData from "../portfolio/project_data"
import githubImg from "../images/github-mark.png"
import gitImg from "../images/github.svg"

export default function Projects() {
    console.log(projectData)

    const projectList = projectData.map((project)=>{
        return (
                <div className="project-div" key={project.id}>
            <a href={project.url} className="portfolio__item" > 
                        <img src={project.image} alt="Dominik Piskorski Archipelago Solutions IT project image" class="portfolio__img" title="Click to View Live App"/>
                </a>
                <h4>{project.description}</h4>
                <a  target="_blank" href={project.git}><img src={gitImg} className="icon-small" title="View Source Code" alt="website of Dominik Piskorski Archipelago Solutions IT project"/></a>

                </div>
              

        )
    })

    return (
        <div className="page-container-portfolio">
            <h1>My example projects</h1>
            <div className="portfolio">
                {projectList}

            </div>
        </div>
    )
}