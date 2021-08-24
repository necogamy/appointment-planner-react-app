import React from "react";

export const Tile = (props) => {
  let tiles = [];

  if (props.contact) {
    tiles = [];
    for (let prop in props.contact) {
      tiles.push(<p className='tile'>{props.contact[prop]}</p>)
    }
  } 
  else if (props.appointment) {
    tiles = [];
    for (let prop in props.appointment) {
      tiles.push(<p className='tile'>{props.appointment[prop]}</p>)
    }
  }

  return (
    <div className="tile-container">
      {tiles}
    </div>
  );
};


// <p className='tile-title'>{props.contact.name}</p>
// <p className='tile'>{props.contact.phone}</p>
// <p className='tile'>{props.contact.email}</p>

// {
//   tiles.map(tile => <p></p>)
// }

// id={appointment.time} appointment={appointment}