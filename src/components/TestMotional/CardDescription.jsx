import React from "react";

const CardDescription = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-col items-center justify-center">
          <div className="p-5 w-96 h-auto  bg-yellow-300 rounded-xl m-5">
            <h1 className="text-center  font-bold text-xl mb-5">
              I love Southwest School
            </h1>
            <p className="font-sans text-md mb-3">Because Sot sach</p>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <div className="p-5 w-96 h-auto  bg-yellow-300 rounded-xl m-5">
            <h1 className="text-center  font-bold text-xl mb-5">
              I want to go to Southwest School
            </h1>
            <p className="font-sans text-md mb-3">
              I love this School it's change my live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
