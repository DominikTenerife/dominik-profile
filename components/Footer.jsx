import React from "react"
import archipelagoImg from "../images/archipelago-small-img.png"

export default function Footer() {
    return (
        <footer>&#169; 2024 <img src={archipelagoImg} className="archipelago-img-large" alt="Archipelago Solutions logo: picture of the person surfing the wave"/><span className="logo-small">Dominik Piskorski</span></footer>
    )
}