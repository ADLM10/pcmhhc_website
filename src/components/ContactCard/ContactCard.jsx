import React from 'react'
import './ContactCard.style.css'

const ContactCard = (Props) => {
  return (
    <>
      {
        Props.Contacts.map((contact,index) => (
      <div className="ContactCard" key={index}>
              <span className="nameContainer">{contact.name}</span>
              <span className="postContainer">{contact.post}</span>
              <a href={`mailto:${contact.email}`} className="emailContainer">{contact.email}</a>
              <a href={`tel:${contact.phone[0]}`} className="phoneContainer">{contact.phone[0]}</a>
              <a href={`tel:${contact.phone[1]}`} className="phoneContainer">{contact.phone[1]}</a>
      </div>
        ))
      }
    </>
  )
}

export default ContactCard