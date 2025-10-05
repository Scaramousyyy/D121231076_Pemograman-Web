import React, {useEffect, useRef} from 'react'
import '../styles/Hero.css'

export default function Hero(){
  const descLeftRef = useRef(null)
  const descRightRef = useRef(null)

  useEffect(()=>{
    const greetingEl = document.querySelector('.hero .greeting')
    const introEl = document.querySelector('.hero .intro')
    const nameEl = document.querySelector('.hero .name')
    const descEls = [descLeftRef.current, descRightRef.current]

    setTimeout(()=> greetingEl.classList.add('finished'), 2000)
    setTimeout(()=> introEl.classList.add('finished'), 3200)
    setTimeout(()=> nameEl.classList.add('finished'), 4700)

    function typeEffect(element, speed){
      const text = element.textContent.trim()
      element.textContent = ''
      element.classList.add('finished')
      let i = 0
      function typing(){
        if(i < text.length){
          element.textContent += text.charAt(i)
          i++
          setTimeout(typing, speed)
        }
      }
      typing()
    }

    setTimeout(()=>{
      descEls.forEach((el, index)=>{
        setTimeout(()=> typeEffect(el, 35), index * 600)
      })
    }, 5400)

  },[])

  return (
    <section id="hero" className="hero">
      <h1 className="greeting">Hi, there!</h1>
      <h1 className="intro">name is</h1>
      <img id="hero-photo" src="/image/heroimg.png" alt="Portrait of Tama Setiawan" className="hero-photo" />
      <h2 className="name">Tama Setiawan</h2>

      <p className="desc-left typewriter" ref={descLeftRef}>
        an undergraduate student from 
        University driven by a strong curiosity 
        Have a big interest in UI/UX and Digital 
        both useful and attractive, also have 
        form.
      </p>

      <p className="desc-right typewriter" ref={descRightRef}>
        Informatics Engineering at Hasanuddin 
        and passion for learning new things. 
        Design, enjoy creating designs that 
        experiences in bringing ideas into visual&nbsp;&nbsp;
      </p>
    </section>
  )
}