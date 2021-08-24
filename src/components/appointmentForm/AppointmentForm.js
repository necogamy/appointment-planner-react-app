import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleTitleChange} value={title} type='text' />
      <input onChange={handleDateChange} value={date} type='date' />
      <input onChange={handleTimeChange} value={time} type='time' min={getTodayString()} />
      <ContactPicker contacts={contacts} />
      <input type='submit' />
    </form>
  );
};
