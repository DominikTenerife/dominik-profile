import React from "react"

import git2 from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import codepen from "../images/codepen.svg"

export default function Contact() {
    return (
        <div className="page-container">
            <h3>I will be happy to get you know and answer your questions. If you just want to say "Hello" and / or send 👍 you will be more than welcome. Below are my communication channels:</h3>

            <div className="contact-container">
                <h3>The easiest way to get quick answer from me is an e-mail:</h3>
                <a href="mailto:dpiskorski1@icloud.com" class="btn" title="Send me an email">dpiskorski1@icloud.com</a>

                <h3>You can also learn more about me and my work through my social channels:</h3>

                <div className="icon-container">

                    <a href="https://www.linkedin.com/in/dominik-piskorski-4261588">
                        <img src={linkedin} className="icon-large" alst="Linkedin" title="Link to Linkedin profile" />
                    </a> 
                                    
                    <a href="https://github.com/DominikTenerife"> 
                        <img src={git2} class="icon-large" title="Link to Github profile" alt="GitHub"/>
                    </a>
                    <a href="https://codepen.io/dominik876"> 
                        <img src={codepen} class="icon-large" title="Link to Codepen profile" alt="Codepen"/>
                    </a>

                </div>
            
        </div>

        </div>
    )
}