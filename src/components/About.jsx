import React from 'react'
import '../styles/About.css'

export default function About(){
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-photo-container">
          <img src="/image/profile.png" alt="Tama Setiawan Profile Photo" className="about-photo" id="photo" />
        </div>
        <article>
          <h2>Eager to <span className="highlight">Learn</span> and <span className="highlight">Explore</span> New Things</h2>
          <p>
            I believe there are numerous opportunities that can serve as valuable platforms 
            for both personal and professional development. Before fully entering professional life, 
            I aim to refine and strengthen my skills to ensure that I am well-prepared 
            and capable of contributing effectively. This stage is a crucial time to invest in continuous learning, 
            sharpen leadership abilities, and build adaptability needed to thrive in diverse environments.
          </p>
        </article>
      </div>
    </section>
  )
}