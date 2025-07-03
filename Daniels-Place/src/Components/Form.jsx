import { Datepicker } from "flowbite-react";
import { TimeInput } from "@heroui/date-input";
import { useState } from "react";

import styled from "styled-components";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    date: new Date(),
    time: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
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
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </StyledWrapper>
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
    color: grey;
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
