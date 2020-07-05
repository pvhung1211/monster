import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster.id}`} alt="" />
      <h2 key={props.monster.id}>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
