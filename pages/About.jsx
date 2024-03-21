import React from "react"
import { Link } from "react-router-dom"
import dominikImage from "../images/dominik-sydney.png"

export default function About() {
    return (
        <div className="component-container">
            <div className="page-container">
        
                    <img src={dominikImage} alt="Dominik Piskorski face photo in Sydney" className="my-picture"/>
                    
                    
                    <h2>From heavy industry to tech</h2>
                    <h4>Almost all of my working life has been dedicated to one employer < a href="https://www.crh.com/" title="link to crh.com" target="_blank" alt="website of CRH plc">CRH</a> a world-leading construction materials producer. I worked for many of its operations in Poland, starting from a junior position in market analytics and continuing up to President/CEO of an operational company with over $100M in turnover, or MD of a division with over 30 production sites and over a thousand direct employees.  After 23 years of a successful and fulfilling career, I made the decision to start a new chapter and begin a new path.</h4>              

                    
                    <h2>Software development</h2>
                    <h4>Computers have been my lifelong passion, and throughout my professional journey, I have actively contributed to various IT projects, such as ERP implementations, commercial and pricing excellence software solutions, business intelligence, and process automations.

                    Currently, I take great pleasure in designing and building my own applications, proficient in both frontend and backend development. My area of specialization lies in the integration of customized AI solutions into a diverse array of applications.  </h4>

                    <h2>Cloud Computing and DevOps</h2>
                    <h4>Software development has been a thrilling adventure for me, during which I've learned that deploying software is just as crucial as coding it. I'm particularly fascinated by the automation of deployment processes, embracing concepts like Continuous Integration (CI) / Continuous Deployment (CD), robust version control systems, and of course, the vast potential of cloud computing. My platform of choice for cloud computing is typically Microsoft Azure, where I've honed my skills and leveraged its extensive services to bring applications to life.</h4>
                    
                    
                    
                </div>
            </div>
    );
}