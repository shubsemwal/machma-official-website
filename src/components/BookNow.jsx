import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./BookNow.css";

const BookNow = () => {
  const [role, setRole] = useState(null); // 'exhibitor' | 'visitor'
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleRoleChange = (selected) => {
    setRole(selected);
    setFormData({});
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = { role, ...formData };

    emailjs
      .send(
        "service_c0c2sda",
        "template_4ssrwwn",
        templateParams,
        "8lqTQmGJQt40fhZqQ"
      )
      .then(() => {
        setSubmitted(true);
        setFormData({});
      })
      .catch(() => {
        alert("Failed to send. Please try again.");
      });
  };

  return (
    <div className="booknow-container">
      <div className="booknow-card">
        <h2 className="booknow-title">Book Your Spot</h2>
        <p className="booknow-subtitle">Select your registration type to continue</p>

        {/* Radio Toggle */}
        <div className="role-toggle">
          <label
            className={`role-option ${role === "exhibitor" ? "active" : ""}`}
            onClick={() => handleRoleChange("exhibitor")}
          >
            <input
              type="radio"
              name="role"
              value="exhibitor"
              checked={role === "exhibitor"}
              onChange={() => handleRoleChange("exhibitor")}
            />
            <span className="role-icon">🏢</span>
            <span className="role-label">Exhibitor</span>
          </label>

          <label
            className={`role-option ${role === "visitor" ? "active" : ""}`}
            onClick={() => handleRoleChange("visitor")}
          >
            <input
              type="radio"
              name="role"
              value="visitor"
              checked={role === "visitor"}
              onChange={() => handleRoleChange("visitor")}
            />
            <span className="role-icon">🎟️</span>
            <span className="role-label">Visitor</span>
          </label>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="success-msg">
            ✅ Form submitted successfully! We'll get back to you soon.
          </div>
        )}

        {/* Exhibitor Form */}
        {role === "exhibitor" && !submitted && (
          <form className="booknow-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter company name"
                value={formData.companyName || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Company Type</label>
              <select
                name="companyType"
                value={formData.companyType || ""}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select company type</option>
                <option value="Machining">Machining</option>
                <option value="Retail">Retail</option>
                <option value="Distributor">Distributor</option>
              </select>
            </div>

            <div className="form-group">
              <label>Product Category</label>
              <input
                type="text"
                name="productCategory"
                placeholder="Machine"
                value={formData.productCategory || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Person Name</label>
              <input
                type="text"
                name="contactPerson"
                placeholder="Enter contact person name"
                value={formData.contactPerson || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile No.</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Id</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="Enter designation"
                value={formData.designation || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit as Exhibitor</button>
          </form>
        )}

        {/* Visitor Form */}
        {role === "visitor" && !submitted && (
          <form className="booknow-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact No.</label>
              <input
                type="tel"
                name="contactNo"
                placeholder="Enter contact number"
                value={formData.contactNo || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter company name"
                value={formData.companyName || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="Enter designation"
                value={formData.designation || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit as Visitor</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookNow;