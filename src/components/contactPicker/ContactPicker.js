import React from "react";

export const ContactPicker = (props) => {
  let options = [];

  options = props.contacts.map(contact => <option value={contact.name}>{contact.name}</option>);

  return (
    <select onChange={props.onChange}>
      <option value='none' selected disabled hidden>No contact is selected</option>
      {options}
    </select>
  );
};