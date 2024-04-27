import React from "react";
import CardImageName from "./TestMotional/CardImageName";
import CardDescription from "./TestMotional/CardDescription";

const TestMotional = () => {
  return (
    <div>
      <div className="bg-green-500 h-auto flex justify-center items-center">
        <div className="flex-wrap justify-center items-center p-4">
          <div className="flex justify-center items-center">
            <div className=" w-96 h-12 text-xl text-center rounded-2xl bg-yellow-100 p-2">
              <h3 className="font-bold text-lg">What Students Say!</h3>
            </div>
          </div>

          <CardDescription />
          <CardImageName />
        </div>
      </div>
    </div>
  );
};

export default TestMotional;
