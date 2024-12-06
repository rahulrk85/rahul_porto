import React from 'react';
import "../App.css"
import Footer from './Footer';

const About = () => {
  return (
    <>
    <div className="bg-gray-50 py-10 px-4 sm:px-8 lg:px-16 dark:text-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        {/* About Me */}
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
          <p className="text-gray-500 text-lg leading-relaxed text-justify">
            Hi, I'm <span className="text-indigo-600 font-semibold">Rahul</span>, a passionate <span className="font-semibold">Frontend Developer</span> and an aspiring tech enthusiast with a background in Medical Electronics Engineering. My journey has been a mix of creativity, technical innovation, and problem-solving.
          </p>
        </section>

        {/* Who I Am */}
        <section className="mb-8">
          <h1 className="text-3xl font-semibold mb-4 text-black dark:text-gray-300">Who I Am</h1>
          <p className="text-gray-500 text-lg leading-relaxed text-justify">
            I’m driven by curiosity and love creating solutions that blend design and technology. Whether it's building intuitive web applications, designing user-friendly interfaces, or integrating innovative health monitoring systems, I thrive on turning ideas into reality.
          </p>
        </section>

        {/* What I Do */}
        <section className="mb-8">
          <h1 className="text-3xl font-semibold text-black dark:text-gray-300 mb-4">What I Do</h1>
          <ul className="list-disc list-inside text-gray-500 text-lg space-y-2">
            <li>
              <span className="font-semibold text-indigo-600">Frontend Development:</span> Skilled in ReactJS, Redux, and TailwindCSS, I craft engaging, dynamic user interfaces.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Projects:</span> Developed a food delivery app inspired by Swiggy (<span className="italic">Foodify</span>) and a personalized movie recommendation app (<span className="italic">Netflix GPT</span>) powered by OpenAI’s GPT model.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Medical Innovation:</span> Designed a Smart Wheelchair Integrated with Health Monitoring, showcasing my ability to merge healthcare and technology.
            </li>
          </ul>
        </section>

        {/* Why Me */}
        <section className="mb-8">
          <h1 className="text-3xl font-semibold text-black dark:text-gray-300 mb-4">Why Me</h1>
          <p className="text-gray-500 text-lg leading-relaxed text-justify">
            I bring a unique blend of tech expertise and storytelling skills (thanks to my YouTube channel, <span className="font-semibold text-red-700"><a href='https://www.youtube.com/@BLOOPERS85'>BLOOPERS</a></span>). My experiences in medical electronics, web development, and content creation enable me to see challenges from multiple perspectives and deliver thoughtful solutions.
          </p>
        </section>

        {/* Fun Fact */}
        <section>
          <h1 className="text-3xl font-semibold text-black dark:text-gray-300 mb-4">Fun Fact</h1>
          <p className="text-gray-500 text-lg leading-relaxed text-justify">
            I love experimenting with emerging tech, but you’ll often find me brainstorming video ideas for my YouTube channel, <span className="font-semibold text-red-700"><a href='https://www.youtube.com/@BLOOPERS85'>BLOOPERS</a></span>, with my team in Kalaburagi.
          </p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
