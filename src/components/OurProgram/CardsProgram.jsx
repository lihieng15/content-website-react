import React from "react";
import CardPG from "./CardPG";

const CardsProgram = () => {
  return (
    <div
      className="mr-32 ml-32
    grid"
    >
      <div className="flex justify-center items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
        <CardPG />
        <CardPG />
        <CardPG />
      </div>
    </div>
  );
};

export default CardsProgram;
