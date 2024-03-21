import React from "react"
import SoftEng from "./SoftEng"
import Projects from "./Projects"


export default function ITSolutions () {
    return (
       
            <div className="page-container">
                    
                <h3>Technologies & tools: </h3>

                <ul class="grid-container-even">
                
                    <li class="skill-item">HTML</li>
                    <li class="skill-item">CSS</li>
                    <li class="skill-item">Javascript</li>
                    <li class="skill-item">React</li>
                    <li class="skill-item">Python</li>
                    <li class="skill-item">Docker</li>
                    <li class="skill-item">Kubernetes</li>
                    <li class="skill-item">Node JS</li>
                    <li class="skill-item">Github</li>
                    <li class="skill-item">Linux</li>
                    <li class="skill-item">JSON</li>
                    <li class="skill-item">Azure</li>
                    <li class="skill-item">Netlify</li>
                    <li class="skill-item">Django</li>
                    <li class="skill-item">Zenhub</li>
                    <li class="skill-item">Postman</li>
                    <li class="skill-item">Tekton</li>
                    <li class="skill-item">Langchain</li>
                    <li class="skill-item">Supabase</li>
                    <li class="skill-item">OpenAI</li>
                    <li class="skill-item">SQL</li>
                </ul>


                <h3>Approaches & methodologies: </h3>

                <ul class="grid-container-even">
                
                    <li class="skill-item">Agile / Scrum</li>
                    <li class="skill-item">DevOps</li>
                    <li class="skill-item">CI/CD</li>
                    <li class="skill-item">VCS</li>
                    <li class="skill-item">TDD</li>
                    <li class="skill-item">Cloud</li>
                    <li class="skill-item">Conteinarizations</li>
                    <li class="skill-item">Secure Design</li>
                    <li class="skill-item">Clean Code</li>
                </ul>

                <SoftEng />
            </div>

            

         
            
        
        )
}