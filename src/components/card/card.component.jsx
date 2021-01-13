import React from "react";

const Card = ({ robot }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "3px",
      }}
    >
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
      <p>{robot.username}</p>
    </div>
  );
};

export default Card;
