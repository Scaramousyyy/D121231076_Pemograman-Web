import React from 'react'
import '../styles/Skills.css'

export default function Skills(){
  const skills = ["Public Speaking","Analytical and Logical Thinking","Leadership","Teamwork Capabilities","Figma","Adaptibility","Time Management","Task Management","Project Management","Customer Experience","Partnership Management","Event Planning","Mentoring","Excel"]
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <p>From these experiences, I have developed and enhanced a range of essential skills, including:</p>
        <div className="skills-list">
          {skills.map((s,i)=> <span key={i}>{s}</span>)}
        </div>
      </div>
    </section>
  )
}