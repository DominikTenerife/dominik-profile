import React from "react"
import { Link, NavLink } from "react-router-dom"
import archipelagoImg from "../images/archipelago-small-img.png"


export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        color: "lightblue",
        textDecoration: "underline",
        textDecorationColor: "blue",
        textDecorationThickness: "5px"
    }

    
    return (
        <header>
            <Link className="site-logo" to="/"><img src={archipelagoImg} className="archipelago-img-large" alt="Archipelago Solutions logo: picture of the person surfing the wave"/> Dominik Piskorski's IT Profile</Link>
            <nav>
                <NavLink
                    to="/projects"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/certifications"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Certifications & Skills
                </NavLink>

                <NavLink
                    to="/experience"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Professional experience
                </NavLink>
                
                

                <NavLink
                    to="/contact"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Contact
                </NavLink>
                
                
            </nav>
        </header>
    )
}