import axios from "axios";
import React, { useState, useEffect } from "react";
import { BACKEND_SERVER_ADDRESS, BACKEND_SERVER_ADDRESS1 } from "../data/variables/variables-1";

function ContactForm() {
  const [isMobile, setIsMobile] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("NOT_LOADING");
  const [helpingSubject, setHelpingSubject] = useState([]);
  const handleFormSubmit = (e) => {
    setLoadingStatus("LOADING");
    e.preventDefault();
    const myFormData = new FormData(e.currentTarget);
    const userName = myFormData.get("userName");
    const userEmail = myFormData.get("userEmail");
    const userDescription = myFormData.get("userDescription");

    const dataForServer = {
      userName,
      userEmail,
      userDescription,
      helpingSubject,
    };

    axios
      .post(
        `${BACKEND_SERVER_ADDRESS1}/api/admin/send-email-to-owner`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
        setLoadingStatus("SUCCESS");
      })
      .catch((error) => {
        setLoadingStatus("FAILED");
        console.log(error);
      });
  };

  const handleClickHelpingSubject = (e) => {
    const value = e.currentTarget.innerText;
    let myHelpingSubjects = [...helpingSubject];
    let isAlreadyExists = false;
    for (let i = 0; i < myHelpingSubjects.length; i++) {
      const singleValue = myHelpingSubjects[i];
      if (singleValue === value) {
        isAlreadyExists = true;
      }
    }

    if (isAlreadyExists) {
      myHelpingSubjects = myHelpingSubjects.filter((data) => data !== value);
    } else {
      myHelpingSubjects.push(value);
    }
    setHelpingSubject(myHelpingSubjects);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="contact_form_outer">
        <div className="contact_form_wrap position-relative">
          <form onSubmit={handleFormSubmit} className="pt-50">
            <div className="form-groups-container">
              <div className="form-group">
                <input
                  name="userName"
                  type="text"
                  placeholder="name"
                  required
                  className="name-input-of-contact-page"
                />
              </div>
              <div className="form-group">
                <input
                  name="userEmail"
                  type="email"
                  placeholder="email"
                  required
                  className="email-input-of-contact-page"
                />
              </div>
            </div>
            <div className="form-group option-type-form">
              <label className="what-do-you-need-label">
                what do you need help with?
              </label>
              <div class="option_types_radios d-flex flex-wrap contact_frame">
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios1"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios1"
                    className="form-check-label"
                    onClick={handleClickHelpingSubject}
                  >
                    branding
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios2"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios2"
                    className="form-check-label"
                    onClick={handleClickHelpingSubject}
                  >
                    web design
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios3"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios3"
                    className="form-check-label"
                    onClick={handleClickHelpingSubject}
                  >
                    web development
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios4"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios4"
                    className="form-check-label"
                    onClick={handleClickHelpingSubject}
                  >
                    social media
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios5"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios5"
                    className="form-check-label"
                    onClick={handleClickHelpingSubject}
                  >
                    advertising
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios6"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios6"
                    className="form-check-label"
                    onClick={handleClickHelpingSubject}
                  >
                    hospitality consulting
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group textareafld ">
              <label className="font-18 font-sfpro letter-spacing-5 mb-10 d-flex">
                let us know about your situation
              </label>
              <textarea
                name="userDescription"
                placeholder=""
                required
                className=""
              />
            </div>
            <div className="form-group send-message">
              {loadingStatus === "NOT_LOADING" && (
                <button
                  type="submit"
                  className="send-message-btn underline_link"
                >
                  Send Message
                </button>
              )}
              {loadingStatus === "LOADING" && (
                <button
                  disabled
                  type="button"
                  className="send-message-btn underline_link"
                >
                  Sending <i class="fa-solid fa-spinner animate-spin"></i>
                </button>
              )}
              {loadingStatus === "SUCCESS" && (
                <button
                  disabled
                  type="button"
                  className="send-message-btn underline_link"
                >
                  Message Sent <i className="fa-solid fa-check ml-3"></i>
                </button>
              )}
              {loadingStatus === "FAILED" && (
                <button
                  type="submit"
                  className="send-message-btn underline_link"
                >
                  FAILED, Try Again
                </button>
              )}
            </div>
          </form>
          {/* <div className='message text-center'>
                    <div className='light_green_dot'></div>
                    <p className='font-18 text-uppercase font-messina'>Sent</p>
                    <p>we’ll be in touch soon.</p>
                </div> */}
        </div>
      </div>
    </>
  );
}

export default ContactForm;
