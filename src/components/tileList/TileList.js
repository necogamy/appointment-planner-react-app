import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      { 
        props.contacts ? props.contacts.map(contact => <Tile contact={contact} />) 
        : props.appointments ? props.appointments.map(appointment => <Tile appointment={appointment} />)
        : ''
      }
    </div>
  );
};
