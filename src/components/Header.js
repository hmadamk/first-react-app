import React from "react"
import src from "../images/Rectangle 90.png"
export default function Header() {
    return (
        <header>
            <img className="hero-img" src={src} alt="laura smith" />
            <div className="content">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <span>laurasmith.website</span>
                <div className="btns">
                    <button className="email">
                        <i class='bx bxs-envelope'></i>Email</button>
                    <button className="linkedin">
                        <i class='bx bxl-linkedin-square' ></i>LinkedIn</button>
                </div>
            </div>
        </header>
    )
}