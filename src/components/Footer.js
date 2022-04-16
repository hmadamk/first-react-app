import React from "react"
import tw from "../images/Twitter Icon.png"
import fb from "../images/Facebook Icon.png"
import ins from "../images/Instagram Icon.png"
import gh from "../images/GitHub Icon.png"
export default function Footer() {
    return (
        <footer>
            <div className="icon"><img src={tw} alt="Twitter" /></div>
            <div className="icon"><img src={fb} alt="Facebook" /></div>
            <div className="icon"><img src={ins} alt="Instagram" /></div>
            <div className="icon"><img src={gh} alt="GitHub" /></div>
        </footer>
    )
}