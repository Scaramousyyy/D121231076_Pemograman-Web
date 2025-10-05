import React from 'react'
import '../styles/Footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-name"><h2>Tama Setiawan</h2></div>
      <div className="footer-content">
        <div className="footer-left">
          <a href="https://www.instagram.com/scaramousyyy/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/in/tamaa-setiawan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/scaramousyyy" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="footer-right">
          <a href="mailto:mrhmatullahs@gmail.com">mrhmatullahs@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}