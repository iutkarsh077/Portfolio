import React from "react";
import myimg from "./assets/myimg.jpg";
import code from "./assets/code.png";
import design from "./assets/design.png";
import Netflix from "./assets/port-netflix.png";
import Textspeech from "./assets/Text to speech - Google Chrome 19-10-2023 13_40_52.png";
import aeroplane from "./assets/Text to speech - Google Chrome 19-10-2023 13_41_56.png";
import sidhu from "./assets/Text to speech - Google Chrome 19-10-2023 13_42_37.png";
import weather from "./assets/Text to speech - Google Chrome 19-10-2023 13_43_25.png";
import cal from "./assets/Text to speech - Google Chrome 19-10-2023 13_44_46.png";
import development from "./assets/devlopment.png";
import auth from "./assets/signup.png";
import shopsmart from "./assets/shopsmart.png";
import RealTales from "./assets/RealTales.png";
import codingCourses from "./assets/coderCourses.png";
import healthify from "./assets/healthify.png";
import MysteryBox from "./assets/MysteryBox.png";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function App() {
  return (
    <div className="dark">
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl font-semibold">
              Javascript Developer
            </h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/presentation/d/1NGp-ZlL6LuSJdriI8TD79RyJ9zwKRfIEewErYAdA-H0/edit?usp=sharingnp["
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center  md:p-10 py-7">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Utkarsh Singh
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Providing services for programming and design content needs. Join
              me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://twitter.com/iutkarsh077"
                target="_blank"
                className="hover:text-white  hover:ease-in-out"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh-singh-9467aa257/"
                target="_blank"
                className="hover:text-white  hover:ease-in-out"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/iutkarsh077"
                target="_blank"
                className="hover:text-white hover:ease-in-out"
              >
                <AiFillGithub />
              </a>
            </div>
            
            <div className="flex justify-center mt-20">
              <div className="rounded-full border-2 border-gray-600 overflow-hidden h-68 w-68  md:h-96 md:w-96">
                <img
                  src={myimg}
                  alt="My Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a web developer and designer,
              I've done many projects{" "}
              <a href="https://github.com/iutkarsh077" target="_blank">
                Github.
              </a>{" "}
              Ever since embarking on my journey as a web developer and
              designer, I've been on an exhilarating quest to transform digital
              landscapes, one line of code and one pixel at a time.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming, and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-105 hover:ease-in-out hover:cursor-pointer flex flex-col items-center">
              <img
                className="bg-red-700"
                src={development}
                alt="Development"
                style={{ width: "200px", height: "150px" }}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Full Stack Web Development
              </h3>
              <p className="py-2">
                Crafting robust web solutions tailored to your requirements,
                covering both front-end and back-end development.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Work With</h4>
              <p className="text-gray-800 py-1">HTML, CSS, JavaScript</p>
              <p className="text-gray-800 py-1">
                React, Next Js 14, Typescript (Front-end)
              </p>
              <p className="text-gray-800 py-1">Node.js, Express (Back-end)</p>
              <p className="text-gray-800 py-1">MongoDB, Cloudinary</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-105 hover:ease-in-out hover:cursor-pointer flex flex-col items-center">
              <img
                src={design}
                alt="Design"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Bring Your Vision to Life
              </h3>
              <p className="py-2">
                Do you have a creative concept for your next stunning website?
                Let's turn your ideas into captivating designs.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">CSS3</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Shadcn UI</p>

              <p className="text-gray-800 py-1">Material-UI, Bootstrap</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-105 hover:ease-in-out hover:cursor-pointer flex flex-col items-center">
              <img
                src={code}
                alt="Code"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Mastering Logic in Web Development
              </h3>
              <p className="py-2">
                Are you looking to strengthen the foundation of your web
                development projects? I specialize in crafting robust and
                efficient code structures that form the backbone of your digital
                solutions.
              </p>
              <h4 className="py-4 text-teal-600">Key Aspects I Focus On</h4>
              <p className="text-gray-800 py-1">Algorithm Design</p>
              <p className="text-gray-800 py-1">Data Structures</p>
              <p className="text-gray-800 py-1">Problem Solving</p>
              <p className="text-gray-800 py-1">Optimizing Performance</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Web development, to me, is not just a job, it's a passion that
              fuels my commitment to creating a better online world. I've
              strived for excellence in every line of code, every responsive
              design, and every user interaction.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have a selection of projects that effectively represent the
              quality and scope of my work.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://mystery-box-omega.vercel.app/" target="_blank">
                <img
                  className="rounded-lg object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={MysteryBox}
                  alt="MysteryBox"
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a href="https://coding-courses.vercel.app/" target="_blank">
                <img
                  className="rounded-lg object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={codingCourses}
                  alt="Coding Courses"
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a
                href="https://videostreaming-phi-black.vercel.app/"
                target="_blank"
              >
                <img
                  className="rounded-lg object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={Netflix}
                  alt="Netflix Clone"
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a href="https://healthify-lake.vercel.app/" target="_blank">
                <img
                  className="rounded-lg object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={healthify}
                  alt="Blog App"
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a
                href="https://auth-seven-chi.vercel.app/signup"
                target="_blank"
              >
                <img
                  className="rounded-lg object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={auth}
                  alt="Auth System"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://shopsmart-green.vercel.app/" target="_blank">
                <img
                  className="rounded-lg object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={shopsmart}
                  alt="Image Sharing App"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://iutkarsh077.github.io/Text-To-Speech/"
                target="_blank"
              >
                <img
                  className="rounded-lg object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={Textspeech}
                  alt="Text to Speech"
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a
                href="https://iutkarsh077.github.io/Spotify-clone-2/"
                target="_blank"
              >
                <img
                  className="rounded-lg object-fill"
                  style={{ width: "100%", height: "100%" }}
                  src={sidhu}
                  alt="Sidhu"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://iutkarsh077.github.io/Weather-App/"
                target="_blank"
              >
                <img
                  className="rounded-lg object-fill"
                  style={{ width: "100%", height: "100%" }}
                  src={weather}
                  alt="Weather"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://iutkarsh077.github.io/Web-Calculator/"
                target="_blank"
              >
                <img
                  className="rounded-lg object-fill"
                  style={{ width: "100%", height: "100%" }}
                  src={cal}
                  alt="Calculator"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://real-tales.vercel.app/" target="_blank">
                <img
                  className="rounded-lg object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={RealTales}
                  alt="Blog App"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
