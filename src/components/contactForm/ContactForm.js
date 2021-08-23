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
  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Contact Name</label>
      <input id='name' placeholder='name' type='text' />

      <label for='tel'>Contact Phone</label>
      <input placeholder='phone' id='tel' type='tel' />

      <label for='email'>Contact Email</label>
      <input placeholder='email' id='email' type='email' />

      <input type='submit' />
    </form>
  );
};

// before this component rendered: ContactForm