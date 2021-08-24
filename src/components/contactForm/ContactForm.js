import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const phoneReg = '([0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9])';

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <form  onSubmit={handleSubmit}>
      <label for='name'>Contact Name</label>
      <input onChange={handleNameChange} value={name} id='name' placeholder='nico' type='text' />

      <label for='tel'>Contact Phone</label>
      <input onChange={handlePhoneChange} value={phone} pattern={phoneReg} placeholder='13-3344-5590' id='tel' type='tel' />

      <label for='email'>Contact Email</label>
      <input onChange={handleEmailChange} value={email} placeholder='madrazonecogamy@gmail.com' id='email' type='email' />

      <input type='submit' />
    </form>
  );
};