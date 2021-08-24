import React from "react";
import { randomKey } from '../util/randomKey';

export const Tile = (props) => {
  let tiles = [];
  let temp = 0;

  if (props.contact) {
    tiles = [];
    for (let prop in props.contact) {
      if (temp === 0) {
        temp = 1;
        tiles.push(<p key={randomKey()} className='tile-title'>{props.contact[prop]}</p>)
        continue;
      }
      tiles.push(<p key={randomKey()} className='tile'>{props.contact[prop]}</p>)
    }

  } 
  else if (props.appointment) {
    tiles = [];
    for (let prop in props.appointment) {
      if (temp === 0) {
        temp = 1;
        tiles.push(<p key={randomKey()} className='tile-title'>{props.appointment[prop]}</p>)
        continue;
      }
      tiles.push(<p key={randomKey()} className='tile'>{props.appointment[prop]}</p>)
    }

  }

  return (
    <div className="tile-container">
      {tiles}
    </div>
  );
};