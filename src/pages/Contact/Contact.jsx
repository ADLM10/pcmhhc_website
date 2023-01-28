/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Contact.style.css";
import Form from "../../components/Form/Form";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import ContactCard from "../../components/ContactCard/ContactCard";
import { Contacts } from "./Contacts.js";

const Contact = () => {
  return (
    <SectionContainer
      children={
        <HeroContainer width="100%">
          <div className="card-image-holder">
            <div className="contactImageContainer">
              <img
                src="https://cdn.discordapp.com/attachments/939143214647083009/1063176999805399101/image002.jpg"
                alt="collegeimage"
              />
            </div>
            <div className="cardContainer">
              <ContactCard Contacts={Contacts} />
            </div>
          </div>

          <div className="form-map-holder">
            <div className="formContainer">
              <h1 className="formHeading">Get in touch</h1>
              <Form />
            </div>
            <div className="mapContainer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9656986718646!2d88.38299029999999!3d22.580386200000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027642bfffffff%3A0x85ea53188937793c!2sPratap%20Chandra%20Memorial%20Homoeopathic%20Hospital%20and%20College!5e0!3m2!1sen!2sin!4v1673569294788!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // allowfullscreen="true"
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </HeroContainer>
      }
      bgColor="#C7A2A2"
    />
  );
};

export default Contact;
