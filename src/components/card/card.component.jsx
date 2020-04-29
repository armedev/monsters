import React from "react";

import "./card.style.css";

export const Card = (props) => (
  <div className="card">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=300x300`}
      alt="monster"
    />
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
