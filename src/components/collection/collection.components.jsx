import React from "react";
import Card from "../card/card.component";

const Collection = ({ robots }) => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 10px",
      }}
    >
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default Collection;
