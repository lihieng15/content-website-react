import React from "react";
import SideBar from "./SideBar";
import CardsNews from "./CardsNews";
const NewsEvent = () => {
  return (
    <div className=" mx-auto h-96">
      {" "}
      <div className=" flex flex-col lg:flex-row gap-12 ">
        {/* blogcard component*/}
        <CardsNews />
        {/* sidebar component*/}
        <div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
