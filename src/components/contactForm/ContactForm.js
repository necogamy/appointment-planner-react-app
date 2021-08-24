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
      <input onChange={handleNameChange} value={name} placeholder='nico' type='text' />
      <input onChange={handlePhoneChange} value={phone} pattern={phoneReg} placeholder='13-3344-5590' type='tel' />
      <input onChange={handleEmailChange} value={email} placeholder='madrazonecogamy@gmail.com' type='email' />
      <input type='submit' />
    </form>
  );
};