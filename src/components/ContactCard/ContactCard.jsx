import React from "react";
import "./ContactCard.style.css";

const ContactCard = (props) => {
  return (
    <>
      {props.Contacts.map((contact, index) => (
        <div className="ContactCard" key={index}>
          <span className="nameContainer">{contact.name}</span>
          <span className="postContainer">{contact.post}</span>
          <a href={`mailto:${contact.email}`} className="emailContainer">
            {contact.email}
          </a>
          {contact.phone.map((element, index) => {
            return (
              <a href={`tel:${element}`} className="phoneContainer">
                {element}
              </a>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default ContactCard;
