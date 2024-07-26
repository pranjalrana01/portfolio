import React from "react";
import sphereai from "../assets/portfolio/sphereai.png";
import evently from "../assets/portfolio/evently.png";
import agriai from "../assets/portfolio/agriai.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      source: sphereai,
      href: "https://github.com/pranjalrana01/ai_summarizer"
    },
    {
      id: 2,
      source: agriai,
      href: "https://github.com/pranjalrana01/Crop_Recommendation_And_Yield",
    },
    {
      id: 3,
      source: evently,
      href: "https://event-platform-delta-two.vercel.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">checkout some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, source, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={source}
                alt=""
                className="rounded-md hover:scale-105 duration-500"
              />
              <a href={href} className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-110 duration-500 ">
                  link
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
