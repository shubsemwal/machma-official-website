import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./BookNow.css";

const BookNow = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    emailjs.send(
      "service_c0c2sda",     
      "template_4ssrwwn",    
      {
        username: formData.username,
        phone: formData.phone,
      },
      "8lqTQmGJQt40fhZqQ"      
    )
    .then(() => {
      alert("Form submitted successfully!");
      setFormData({ username: "", phone: "" });
    })
    .catch(() => {
      alert("Failed to send. Try again.");
    });
  };

  return (
    <div className="booknow-container">
      <div className="booknow-form">
        <h2>Book Your Stall</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;