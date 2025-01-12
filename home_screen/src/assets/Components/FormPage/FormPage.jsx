import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormPage.css";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, phone, email, dob, address } = formData;
    if (!name || !phone || !email || !dob || !address) {
      return "All fields are required!";
    }
    if (!/^[a-zA-Z\s]{1,15}$/.test(name)) {
      return "Name must be text only and max 15 Charecter";
    }
    if (!/^\d{10}$/.test(phone)) {
      return "Phone number must be exactly 10 digits";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Invalid email address!";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      navigate("/display", { state: formData });
    }
  };

  return (
    <div className="display">
      <h1>Form page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="PhoneNumber"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="date"
          name="dob"
          placeholder="DOB"
          value={formData.dob}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="textarea"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
