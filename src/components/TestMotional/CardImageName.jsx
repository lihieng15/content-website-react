import React from "react";

const CardImageName = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-col items-center justify-center">
          <div className="p-5 pt-0 w-96 h-auto font-bold text-2xl text-center rounded-xl m-5">
            <span>Ang Soty</span>
            <div className="flex justify-center pt-3 items-center">
              <img
                className="rounded-full w-auto h-32 "
                src="./src/assets/Cutelogo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <div className="p-5 pt-0 w-96 h-auto font-bold text-2xl text-center rounded-xl m-5">
            <span>Khorn Sochouen</span>
            <div className="flex justify-center pt-3 items-center">
              <img
                className="rounded-full w-auto h-32 "
                src="./src/assets/Cutelogo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImageName;
