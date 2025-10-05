import React from 'react'
import '../styles/Navbar.css'

export default function Navbar(){
  return (
    <header>
      <nav className="navbar">
        <a href="" className="navbar-brand">
          <img id="logo-photo" src="/image/logo.png" alt="Logo Tama Setiawan" className="navbar-logo" />
        </a>
        <ul>
          <li><a href="#hero" data-target="hero">Home</a></li>
          <li><a href="#about" data-target="about">About Me</a></li>
          <li><a href="#experience" data-target="experience">Experience</a></li>
          <li><a href="#skills" data-target="skills">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/17SXyfJqP5Z_Bge6Ol-J6p0qOpxM27Gp4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </nav>
    </header>
  )
}