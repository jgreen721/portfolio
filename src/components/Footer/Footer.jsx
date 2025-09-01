import React from 'react'
import { FaCodepen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

import "./Footer.css"

const Footer = () => {
    const links = [
        {id:1,link:"https://codepen.io/jgreen721",icon:<FaCodepen/>,alt:"codepen"},
        {id:2,link:"https://github.com/jgreen721",icon:<FaGithub/>,alt:"github"},
        {id:3,link:"https://www.frontendmentor.io/profile/jgreen721",icon:<SiFrontendmentor/>,alt:"frontend-mentor"},
    ]
  return (
    <footer>
        <div className="footer-content">
            <ul className="footer-links">
                {links.map((link,idx)=>(
                    <li key={link.id} className="footer-link-item">
                        <a className="footer-link" href={link.link} alt={link.alt} target="_blank">
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer