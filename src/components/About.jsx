import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a passionate software developer with a strong foundation in Data
          Structures and Algorithms, backed by an excellent academic record. I
          hold a B.Tech in Computer Science from Maharishi Markandeshwar
          University, where I graduated with a CGPA of 8.8. My expertise spans
          the MERN stack, enabling me to build robust and scalable web
          applications. I have hands-on experience in developing full-stack
          projects that include frontend design, backend logic, and database
          management. In addition to my web development skills, I have a keen
          interest in Machine Learning. 
        </p>

        <br />

        <p className="text-xl">
        I enjoy applying machine learning
          techniques to solve complex problems and derive actionable insights
          from data. My technical proficiency is complemented by my ability to
          learn and adapt quickly, ensuring I stay updated with the latest
          industry trends and technologies. I am a proactive and dedicated
          professional who thrives in collaborative environments. I am always
          eager to take on new challenges and contribute to innovative projects.
          My goal is to leverage my skills and knowledge to make a meaningful
          impact in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;
