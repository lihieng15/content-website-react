import React from "react";
import Banner from "../components/Banner";

import Footer from "../components/Footer";
const Admissions = () => {
  return (
    <>
      <Banner />
      <h2 className="flex justify-center items-center font-bold text-6xl bg bg-light-green-500 h-20 ">
        Admissions
      </h2>
      <div className="w-auto ml-32 mr-32 h-auto">
        <p>
          I’m extremely grateful for my parents’ decision on enrolling me in
          Sovannaphumi School. I couldn’t fully express my heartfelt gratitude
          towards all the teachers and staff during these 12 years of mine as an
          ambitious student. Sovannaphumi School doesn’t mess about when it
          comes to education and rules but as you can see, the strictness of the
          school has raised up countless outstanding students that others
          desperately strive for. The level of professionalism and hospitality
          is surreal which are the reasons why my parents and others have chosen
          this school.
        </p>
        <div className="flex justify-center items-center mb-10 mt-10">
          <img
            className="rounded-2xl mr-20"
            src="./src/assets/Cutelogo.jpg"
            alt="Logo"
          />
          <img
            className="rounded-2xl ml-20"
            src="./src/assets/Cutelogo.jpg"
            alt="Logo"
          />
        </div>

        <h2 className="flex justify-center items-center rounded-2xl font-bold text-4xl  bg-green-400 h-20 ">
          Admission Progress
        </h2>
        <p className="ml-32">
          1.Application: Submit an online application form and all required
          documents. <br />
          2.Entrance Exam: Students applying to Grades 1-12 must take an
          entrance exam to assess their academic abilities and English
          proficiency. <br />
          3.Interview: Students and their parents may be invited for an
          interview with the Admissions Office. <br />
          4.Acceptance: Students who meet the admission criteria will receive an
          acceptance letter.
        </p>
        <h2 className="flex justify-center items-center rounded-2xl font-bold text-4xl  bg-green-400 h-20 ">
          General Admissions Requirements
        </h2>
        <p className="ml-32">
          Age: 6 - 11 years old Nationality: Cambodian citizens and foreign
          nationals are eligible for admission.
          <br /> Academic Records: Students must submit their previous academic
          records, including transcripts and certificates. <br />
          Language Proficiency: Students must demonstrate proficiency in
          English, the language of instruction at SWIS.
          <br />
        </p>
        <h2 className="flex justify-center items-center rounded-2xl font-bold text-4xl  bg-green-400 h-20 ">
          Course Load
        </h2>
        <p className="ml-32">
          The course load at SWIS is designed to challenge students while also
          providing them with the support they need to succeed. Students in
          Grades 1-6 typically take 5-6 core subjects per semester, plus
          electives. Students in Grades 7-12 typically take 6-8 core subjects
          per semester, plus electives.The course load at SWIS is designed to
          challenge students while also providing them with the support they
          need to succeed. Students in Grades 1-6 typically take 5-6 core
          subjects per semester, plus electives. Students in Grades 7-12
          typically take 6-8 core subjects per semester, plus electives.
        </p>
        <h2 className="flex justify-center items-center rounded-2xl font-bold text-4xl  bg-green-400 h-20 ">
          Examinations
        </h2>
        <p className="ml-32">
          Age: 6 - 11 years old Nationality: Cambodian citizens and foreign
          nationals are eligible for admission.
          <br /> Academic Records: Students must submit their previous academic
          records, including transcripts and certificates. <br />
          Language Proficiency: Students must demonstrate proficiency in
          English, the language of instruction at SWIS.
          <br />
        </p>
        <h2 className="flex justify-center items-center rounded-2xl font-bold text-4xl  bg-green-400 h-20 ">
          Graduation Requirements
        </h2>
        <p className="ml-32">
          Age: 6 - 11 years old Nationality: Cambodian citizens and foreign
          nationals are eligible for admission.
          <br /> Academic Records: Students must submit their previous academic
          records, including transcripts and certificates. <br />
          Language Proficiency: Students must demonstrate proficiency in
          English, the language of instruction at SWIS.
          <br />
        </p>
        <h2 className="flex justify-center items-center rounded-2xl font-bold text-4xl  bg-green-400 h-20 ">
          Gading System for Primary school
        </h2>
        <p className="ml-32">
          Age: 6 - 11 years old Nationality: Cambodian citizens and foreign
          nationals are eligible for admission.
          <br /> Academic Records: Students must submit their previous academic
          records, including transcripts and certificates. <br />
          Language Proficiency: Students must demonstrate proficiency in
          English, the language of instruction at SWIS.
          <br />
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Admissions;
