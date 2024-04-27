import React from "react";
import Banner from "../components/Banner";
import CardsProgram from "../components/CardsProgram";
import NewsEvent from "../components/NewsEvent";
import Footer from "../components/Footer";
import LearningResource from "./LearningResource";
import TestMotional from "../components/TestMotional";
import ManagementTeam from "../components/ManagementTeam/ManagementTeam";
import OurPartnerCard from "../components/OurPartner/OurPartnerCard";

const Home = () => {
  return (
    <>
      <Banner />
      <h2 className="flex justify-center items-center font-bold text-4xl bg bg-yellow-400 h-20 ">
        Our Programs
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 ">
        <CardsProgram />
      </div>
      <h2 className="flex justify-center items-center font-bold text-4xl bg bg-yellow-400 h-20 ">
        Events & News
      </h2>
      <div className=" mb-80 flex flex-col lg:flex-row gap-4">
        <NewsEvent />
      </div>
      <h2 className="flex justify-center items-center font-bold text-4xl bg bg-yellow-400 h-20 ">
        Learning & Resource
      </h2>
      <div>
        <LearningResource />
      </div>
      <h2 className="flex justify-center items-center font-bold text-4xl bg bg-yellow-400 h-20 ">
        Test Motional
      </h2>
      <div>
        <TestMotional />
      </div>
      <h2 className="flex justify-center items-center font-bold text-4xl bg bg-yellow-400 h-20 ">
        Management Team
      </h2>
      <div>
        <ManagementTeam />
      </div>
      <h2 className="flex justify-center items-center font-bold text-4xl bg bg-yellow-400 h-20 ">
        Our Partners
      </h2>
      <div>
        <OurPartnerCard />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
