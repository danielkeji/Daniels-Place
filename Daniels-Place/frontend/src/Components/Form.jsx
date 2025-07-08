import { Datepicker } from "flowbite-react";
import { TimeInput } from "@heroui/date-input";
import { useState } from "react";

import styled from "styled-components";

const Form = ({ onBookingSaved }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    date: new Date(),
    time: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^\d{10,15}$/.test(phone.replace(/\D/g, "")); // Accepts 10-15 digits

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }));
  };

  const handleTimeChange = (time) => {
    setFormData((prev) => ({
      ...prev,
      time,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.date ||
      !formData.time
    ) {
      alert("All fields are required.");
      setIsSubmitting(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert("Please enter a valid phone number (10-15 digits).");
      return;
    }

    try {
      const response = await fetch(
        "https://daniels-place-api.onrender.com/api/bookings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        localStorage.setItem("bookingEmail", formData.email);
        if (onBookingSaved) onBookingSaved(formData);
        alert("Booking saved! Click the payment button to pay.");
        localStorage.removeItem("bookingEmail");
      } else {
        alert("Error saving booking");
        setIsSubmitting(false);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {error && <div className="p-2 text-red-700 bg-red-100">{error}</div>}
      <StyledWrapper>
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Appointment </p>
          <p className="message">Book an appointment with me </p>
          <div className="flex">
            <label>
              <input
                required
                type="text"
                className="input"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <span>Firstname</span>
            </label>
            <label>
              <input
                required
                type="text"
                className="input"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <span>Lastname</span>
            </label>
          </div>
          <label>
            <input
              required
              type="email"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required
              type="tel"
              className="input"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              pattern="\d{10,15}"
              maxLength={15}
              minLength={10}
            />
            <span>Phone Number</span>
          </label>
          <label>
            <input
              required
              type="text"
              className="input"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <span>Address</span>
          </label>
          <Datepicker
            required={true}
            value={formData.date}
            onChange={handleDateChange}
            minDate={new Date()}
          />
          <TimeInput
            isRequired
            label="pick time"
            className="time-input"
            value={formData.time}
            onChange={handleTimeChange}
          />
          <button type="submit" className="submit" disabled={isSubmitting || isSubmitted}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    color: black;
  }

  .title {
    font-size: 28px;
    color: black;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: black;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: gray;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .time-input {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    background: var(--color-primaryColor);
    color: var(--color-secondaryColor);
  }

  .submit {
    border: none;
    outline: none;
    background-color: black;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Form;
