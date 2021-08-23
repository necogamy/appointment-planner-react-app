import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate === false) addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };


  useEffect(() => {
    for (let contact in contacts) {
      if (contacts[contact].name === name) setDuplicate(true);
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm  
          contactInfo={{
            name,
            setName,
            phone,
            setPhone,
            email,
            setEmail,
            handleSubmit
          }}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};

// If there is an error, change contact info prop