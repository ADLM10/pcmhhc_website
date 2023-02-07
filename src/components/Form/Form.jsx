import React, { useState } from "react";
import "./Form.style.css";

const Form = () => {
  const handleClick = (e) => {
    const { name, value } = e.target;
    setEmailDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    e.preventDefault();
  };

  const [emailDetails, setEmailDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form>
          <div className="formbold-mb-5">
            <label for="name" className="formbold-form-label">
              {" "}
              Full Name{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="formbold-form-input"
              onChange={handleClick}
              value={emailDetails.name}
            />
          </div>

          <div className="formbold-mb-5">
            <label for="email" className="formbold-form-label">
              {" "}
              Email Address{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="formbold-form-input"
              onChange={handleClick}
              value={emailDetails.email}
            />
          </div>

          <div className="formbold-mb-5">
            <label for="subject" className="formbold-form-label">
              {" "}
              Subject{" "}
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="formbold-form-input"
              onChange={handleClick}
              value={emailDetails.subject}
            />
          </div>

          <div className="formbold-mb-5">
            <label for="message" className="formbold-form-label">
              {" "}
              Message{" "}
            </label>
            <textarea
              rows="6"
              name="message"
              id="message"
              placeholder="Type your message"
              className="formbold-form-input"
              onChange={handleClick}
              value={emailDetails.message}
            ></textarea>
          </div>

          <div>
            <a
              onClick={() => {
                handleClick();
                setEmailDetails({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                });
              }}
              className="formbold-btn"
              href={`mailto:pcmhhc.enq@gmail.com?subject=${emailDetails.subject}&body=Name: ${emailDetails.name}%0D%0AEmail: ${emailDetails.email}%0D%0AMessage: ${emailDetails.message}`}
            >
              Send
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
