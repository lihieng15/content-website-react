import React from "react";
import Banner from "../components/Banner";
import CardsProgram from "../components/OurProgram/CardsProgram";
import NewsEvent from "../components/NewsEvent";
import Footer from "../components/Footer";
import LearningResource from "./LearningResource";
import TestMotional from "../components/TestMotional";
import ManagementTeam from "../components/ManagementTeam/ManagementTeam";
import OurPartnerCard from "../components/OurPartner/OurPartnerCard";
import BannerCarousel from "../components/Banner/BannerCarousel";

const Home = () => {
  return (
    <>
      <BannerCarousel />

      <h2 className=" text-white flex justify-center items-center font-bold text-4xl bg bg-light-green-600 h-20 ">
        Our Programs
      </h2>
      <div>
        <CardsProgram />
      </div>
      <h2 className="text-white flex justify-center items-center font-bold text-4xl bg bg-light-green-700 h-20 ">
        Events & News
      </h2>
      <div>
        <NewsEvent />
      </div>
      <h2 className="text-white flex justify-center items-center font-bold text-4xl bg bg-light-green-700 h-20 ">
        Learning & Resource
      </h2>
      <div>
        <LearningResource />
      </div>
      <h2 className="text-white flex justify-center items-center font-bold text-4xl bg bg-light-green-700 h-20 ">
        Test Motional
      </h2>
      <div>
        <TestMotional />
      </div>
      <h2 className="text-white flex justify-center items-center font-bold text-4xl bg bg-light-green-700 h-20 ">
        Management Team
      </h2>
      <div>
        <ManagementTeam />
      </div>
      <h2 className="text-white flex justify-center items-center font-bold text-4xl bg bg-light-green-700 h-20">
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
