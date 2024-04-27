import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Resource = () => {
  return (
    <>
      <Banner />

      <div className="w-auto ml-64 mr-64 h-auto mt-10 mb-10">
        <h2 className="flex justify-center items-center rounded-2xl font-bold text-4xl bg-green-400 h-20 ">
          Our Activities
        </h2>
        <div className="flex justify-center items-center m-auto mt-10 mb-10 w-96">
          <img
            className="rounded-2xl ml-20 mr-20"
            src="./src/assets/Cutelogo.jpg"
            alt="Logo"
          />
          <img
            className="rounded-2xl ml-20 mr-20"
            src="./src/assets/Cutelogo.jpg"
            alt="Logo"
          />
          <img
            className="rounded-2xl ml-20 mr-20"
            src="./src/assets/Cutelogo.jpg"
            alt="Logo"
          />
        </div>
        <h3 className="text-3xl mb-10">Khmer Education Generations</h3>
        <div className="ml-32 mr-32 mb-5">
          <p>
            Khmer General Education at the primary grade level in Cambodia is
            designed to provide students with a strong foundation in the Khmer
            language and culture, as well as in the core academic subjects. The
            curriculum is based on the Cambodian Ministry of Education, Youth
            and Sport's curriculum framework and is taught in Khmer, the
            official language of Cambodia.
          </p>
          <ul>
            <li>
              Khmer language and literature: This includes reading, writing,
              speaking, and listening skills in Khmer. Kids will also learn
              about Khmer grammar and vocabulary.
            </li>
            <li>
              Mathematics: This includes basic math skills, such as counting,
              addition, subtraction, multiplication, and division. Kids will
              also learn about geometry and measurement.
            </li>
            <li>
              Khmer language and literature: This includes reading, writing,
              speaking, and listening skills in Khmer. Kids will also learn
              about Khmer grammar and vocabulary.
            </li>
            <li>
              Mathematics: This includes basic math skills, such as counting,
              addition, subtraction, multiplication, and division. Kids will
              also learn about geometry and measurement.
            </li>
            <li>
              Khmer language and literature: This includes reading, writing,
              speaking, and listening skills in Khmer. Kids will also learn
              about Khmer grammar and vocabulary.
            </li>
            <li>
              Mathematics: This includes basic math skills, such as counting,
              addition, subtraction, multiplication, and division. Kids will
              also learn about geometry and measurement.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resource;
