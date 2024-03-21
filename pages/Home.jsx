import React from "react"
import { Link } from "react-router-dom"
import About from "./About"
import ITSolutions from "./ITSolutions"
import Dominik from "./Dominik"
import Contact from "./Contact"
import Projects from "./Projects"



export default function Home() {
    return (
        <div className="home-container-main" >

        <div className="home-container">
                
                <div className="home-container-inner" >
                    
                    <h1>Let's code today!</h1>

                    
                                    
                </div>
                
        </div>
            <div className="section-title-about">Introduction</div>

            <About />

            <div className="section-title">Projects</div>

            <Projects />
            
            <div className="section-title">Certifications & Skills</div>

            <ITSolutions />

            
            <div className="section-title">Contact</div>

            <Contact />
        </div>
    )
};