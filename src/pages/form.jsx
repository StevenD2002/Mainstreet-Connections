import React from "react";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/stevendew02/google_sheets/DKQPEZbNQGwtlHnW?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              name,
              company,
              service,
              contact,
              technician,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        company: "",
        service: "",
        contact: "",
        technician: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
            *Not guaranteed, but we will do our best to accommodate your request
          </p>
          <input type="submit" value="Send" className="submit-button" />
        </div>
      </form>
    </div>
  );
}
