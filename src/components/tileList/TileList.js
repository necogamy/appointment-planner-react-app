import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      { 
        props.contacts ? props.contacts.map(contact => <Tile id={contact.phone} contact={contact} />) 
        : props.appointments ? props.appointments.map(appointment => <Tile id={appointment.time} appointment={appointment} />)
        : ''
      }
    </div>
  );
};
