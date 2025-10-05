import React, {useState} from 'react'
import '../styles/Experience.css'
import Modal from './Modal.jsx'

export default function Experience(){
  const [openModal, setOpenModal] = useState(null)

  const cards = [
    { id: 'localproject', title: 'Local Project', img: '/image/lp0.png' },
    { id: 'aiesecfutureleader', title: 'AIESEC Future Leader', img: '/image/afl0.png' },
    { id: 'coderinstitute', title: 'Coder Institute', img: '/image/coder0.png' },
    { id: 'recursion', title: 'RECURSION 1.0', img: '/image/recursion.png' },
    { id: 'weconnect', title: 'WeConnect 2025', img: '/image/weconnect.png' }
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <h2>Experiences that <span className="highlight">Shaped My Growth</span></h2>
        <p>
          Throughout my journey, I have consistently participated in organizational activities, 
          taken on leadership responsibilities, and contributed to various projects at both campus and national levels. 
          In addition, I have been actively involved in volunteer initiatives aimed at making a positive impact. 
          Some highlights include:
        </p>

        <div className="experience-list">
          {cards.map(c => (
            <div key={c.id} className="card" onClick={()=> setOpenModal(c.id)}>
              <img src={c.img} alt={c.title} />
              <div className="overlay"><span className="title">{c.title}</span></div>
            </div>
          ))}

          {/* Modals */}
          <Modal open={openModal === 'localproject'} onClose={()=> setOpenModal(null)} title={'Local Project by AIESEC in UNHAS'} headerImage={'/image/lp0.png'}>
            <p>Local Project is a program that supports the personal growth of young people in Indonesia through a four-week volunteer experience. It uses a hybrid approach, combining online and in-person activities, to give participants real-world exposure. The program aims to develop youth leadership skills while raising awareness about the Sustainable Development Goals (SDGs). Local Project provides young people with hands-on local experiences, allowing them to make a positive impact in their communities while learning the fundamentals of leadership.</p>
            <h3>Key Learnings:</h3>
            <ul>
              <li>Enhanced adaptability and problem-solving skills.</li>
              <li>Improve teamwork and communication skills.</li>
              <li>Learned to manage group dynamics and foster collaboration.</li>
              <li>Develop empathy and a sense of social responsibility.</li>
            </ul>
            <div className="sub-projects">
              <div className="sub-card"><img src="/image/lp1.png" alt="I-Learn 10.0 - AIESEC in UNHAS" /><div className="overlay"><span className="title">Participant of I-Learn 10.0</span></div></div>
              <div className="sub-card"><img src="/image/lp2.png" alt="Heroes For Life" /><div className="overlay"><span className="title">Participant of Heroes For Life 8.0</span></div></div>
              <div className="sub-card"><img src="/image/lp3.png" alt="Culturise" /><div className="overlay"><span className="title">OC-Onsite of Culturise 1.0</span></div></div>
              <div className="sub-card"><img src="/image/lp4.png" alt="Greeneration" /><div className="overlay"><span className="title">OCVP Costumer Experience & International Relation of Greeneration 17.0</span></div></div>
            </div>
          </Modal>

          <Modal open={openModal === 'aiesecfutureleader'} onClose={()=> setOpenModal(null)} title={'AIESEC Future Leaders by AIESEC in UNHAS'} headerImage={'/image/afl0.png'}>
            <p>AIESEC Future Leaders (AFL) is a youth development program that helps participants grow their leadership skills and make a positive impact in their communities. Over the course of three months, participants engage in a variety of activities and sessions that focus on developing both soft skills and hard skills that are relevant to real-world challenges. Through hands-on experiences, mentorship, and collaboration with peers, AFL gives participants the opportunity to discover their strengths, take initiative, and contribute meaningfully to society, all while building a network of like-minded young leaders.</p>
            <h3>Key Learnings:</h3>
            <ul>
              <li>Learned to design and execute community projects.</li>
              <li>Refined mentoring and coaching abilities.</li>
              <li>Enhanced team management and communication skills.</li>
              <li>Gained an understanding of group dynamics within a multi-skilled team.</li>
            </ul>
            <div className="sub-projects">
              <div className="sub-card"><img src="/image/afl1.png" alt="AFL Summer Peak 2025" /><div className="overlay"><span className="title">Delegate of AFL Summer Peak 2025</span></div></div>
              <div className="sub-card"><img src="/image/afl2.png" alt="AFL Winter Peak 2025" /><div className="overlay"><span className="title">Coach of AFL Winter Peak 2025</span></div></div>
            </div>
          </Modal>

          <Modal open={openModal === 'coderinstitute'} onClose={()=> setOpenModal(null)} title={'Coder Institute'} headerImage={'/image/coder0.png'}>
            <p>Coder Institute is a student organization focusing on programmer professionalism aims to create world class programmer with four division which are Mobile, Website, Game, and Internet of Things.</p>
            <h3>Key Learnings:</h3>
            <ul>
              <li>Improved event coordination and time management skills.</li>
              <li>Strengthened teamwork and cross-team communication.</li>
              <li>Gained knowledge of digital product development from concept to execution.</li>
              <li>Enhanced creativity and problem-solving within a team setting.</li>
            </ul>
            <div className="sub-projects">
              <div className="sub-card"><img src="/image/coder1.png" alt="Seminar KSB Coder Institute 2024" /><div className="overlay"><span className="title">Event Coordinator of Seminar KSB Coder Institute 2024</span></div></div>
              <div className="sub-card"><img src="/image/coder2.png" alt="Game Division of Coder Institute 24/25" /><div className="overlay"><span className="title">Organizing Committee of Coder Institute 2024/2025</span></div></div>
            </div>
          </Modal>

          <Modal open={openModal === 'recursion'} onClose={()=> setOpenModal(null)} title={'Red Campus Futurist Informatics Competition'} headerImage={'/image/recursion.png'}>
            <p>Red Campus Futurist Informatics Competition is a prestigious national competition that provides a platform for participants to develop and present innovative solutions in the field of informatics and digital technology. The competition aims to foster creativity, strengthen problem-solving abilities, and enhance technical competencies among students. By addressing contemporary challenges through the application of digital innovation, the event promotes academic excellence, collaboration, and the advancement of knowledge in the informatics domain.</p>
            <h2>Role: Coordinator Event</h2>
            <h3>Key Learnings:</h3>
            <ul>
              <li>Enchanced leadership, delegation, and teamwork skills.</li>
              <li>Balanced detail orientation with big-picture objectives.</li>
              <li>Gained problem-solving experience in event preparation and execution.</li>
            </ul>
          </Modal>

          <Modal open={openModal === 'weconnect'} onClose={()=> setOpenModal(null)} title={'WeConnect 2025'} headerImage={'/image/weconnect.png'}>
            <p>WeConnect 2025 is a Talkshow and Consulting Session program organized by Welcome09 SMFT-UH, aimed at broadening young people’s knowledge and perspectives on professionalism while providing motivation, inspiration, and career preparation. This year, WeConnect carries the theme 'Empowering Eastern Indonesian Youth through Global Experience: Career Development Strategies for Local Impact.'</p>
            <h2>Role: Event Staff</h2>
            <h3>Key Learnings:</h3>
            <ul>
              <li>Strengthened project management and organizational skills.</li>
              <li>Enhanced collaboration and creativity in marketing strategies.</li>
              <li>Developed strategic thinking through participant flow design.</li>
              <li>Gained hands-on experience in event logistics and coordination.</li>
            </ul>
          </Modal>

        </div>
      </div>
    </section>
  )
}