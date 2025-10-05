import React from 'react'
import '../styles/Modal.css'

export default function Modal({open, onClose, title, headerImage, children}){
  if(!open) return null
  return (
    <div className="modal" onClick={(e)=>{ if(e.target.classList.contains('modal')) onClose() }}>
      <div className="modal-content">
        <div className="modal-header-image">
          <img src={headerImage} alt={title} />
        </div>
        <div className="modal-body">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}