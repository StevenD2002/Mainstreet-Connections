import React from "react"

import { useState } from "react";
export default function Form(props) {
  const [data, setData] = useState({
    name: " ",
    company: "",
    service: "",
    contact: "",
    technician: "",
  });
  const { name, company, service, contact, technician } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form 
      action="https://script.google.com/macros/s/AKfycbw7nm2DdJfd7IdzJuBaTkTRXseW_zC3xXZ58b8qP75u4unqNLifRBiLIMdxYT2dtD0gAA/exec"
      method="POST"
      >
        <div className="form-group">
          <h3 className="form-header">Service Inquiry</h3>
          <label className="input-label">Name:</label>
          <textarea
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className="input"
            rows="1"
          ></textarea>
        </div>

        <div className="form-group">
          <label className="input-label">Company Name:</label>
          <textarea
            type="text"
            name="company"
            value={company}
            onChange={handleChange}
            required
            className="input"
            rows="1"
          ></textarea>
        </div>
        <div className="form-group">
          <label className="input-label">What can we do for you?</label>

          <textarea
            type="text"
            name="service"
            value={service}
            onChange={handleChange}
            required
            className="input"
            rows="5"
            cols="50"
          ></textarea>
        </div>
        <div className="form-group">
          <label className="input-label">
            Please leave a way for us to contact you:
          </label>
          <textarea
            type="text"
            name="contact"
            value={contact}
            onChange={handleChange}
            placeholder="Email or Phone"
            className="input"
            rows="1"
          ></textarea>
        </div>
        <div className="form-group">
          <label className="input-label">Request Specific Technician:</label>
          <textarea
            type="text"
            name="technician"
            value={technician}
            onChange={handleChange}
            className="input"
            rows="1"
            placeholder="*optional"
          ></textarea>

          <p className="footnote">
            *if you would like a specific technician, please specify
          </p>
          <input type="submit" value="Send" className="submit-button" />
        </div>
      </form>
    </div>
  );
}
