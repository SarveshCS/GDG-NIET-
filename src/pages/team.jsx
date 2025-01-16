import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer2 from "../components/footer";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const gradients = [
  ["from-green-600", "to-green-300"],
  ["from-yellow-600", "to-yellow-300"],
  ["from-red-600", "to-red-300"],
  ["from-blue-600", "to-blue-300"],
];

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Vanshika Pandey",
      role: "GDG Lead",
      image: "23.png",
      linkedin: "https://www.linkedin.com/in/vanshika-pandey369/",
      github: null,
      insta: "https://www.instagram.com/missrocknrolla___",
      x: "https://x.com/RealVanshikaP",
      tagline: "It's quite fun to do the impossible (~Walt Disney)",
    },
    {
      name: "Ankit Raj",
      role: "GDG Co-Lead",
      image: "17.png",
      linkedin: "https://www.linkedin.com/in/ankitrpathak/",
      github: null,
      insta: "https://www.instagram.com/ankitrpathak",
      x: null,
      tagline: "When death finds you, may it find you alive",
    },
    {
      name: "Toshak Bhat",
      role: "GDG Co-Lead",
      image: "3.png",
      linkedin: "https://www.linkedin.com/in/toshakbhat",
      github: null,
      insta: "https://www.instagram.com/bhatsaab04",
      x: "https://x.com/ToshakBhat",
      tagline: "WYSIWYG",
    },
    {
      name: "Pihu Gupta",
      role: "Director Of Operations",
      image: "10.png",
      linkedin: "https://www.linkedin.com/in/pihu-gupta-750435280",
      github: null,
      insta: "https://www.instagram.com/unapologetically_uhip",
      x: "https://x.com/Pihugupta1500",
      tagline: "No",
    },
    {
      name: "Rishi Ranjan",
      role: "Technical Lead",
      image: "8.png",
      linkedin: "linkedin.com/in/rishi-rih",
      github: null,
      insta: "https://www.instagram.com/rih__theory",
      x: "https://x.com/rih__theory",
      tagline: "Box-Box",
    },
    {
      name: "Vivek Tripathi",
      role: "Technical Co-lead",
      image: "1.png",
      linkedin: "https://www.linkedin.com/in/vivek-tripathi-319677249",
      github: null,
      insta: "https://www.instagram.com/tripathivivek123",
      x: "https://x.com/VivekTripa45743",
      tagline: "Curious about how things work",
    },
    {
      name: "Dev Goyal",
      role: "Social Media Head",
      image: "15.png",
      linkedin: "https://www.linkedin.com/in/devgoyalg/",
      github: null,
      insta: "https://www.instagram.com/dev_goyal_g",
      x: "https://x.com/dev_goyal_g",
      tagline: "Frontend Developer & DSA Enthusiast :)",
    },
    {
      name: "Vaishnavi Sharma",
      role: "Design Head",
      image: "2.png",
      linkedin: "https://www.linkedin.com/in/vaishnavish05",
      github: null,
      insta: "https://www.instagram.com/Vaishnavi_sh05",
      x: "https://x.com/Vaishnavi_sh05",
      tagline: "If it’s not aesthetic, it’s not perfect",
    },
    {
      name: "Arshia Talwar",
      role: "Design Head",
      image: "16.png",
      linkedin: "https://www.linkedin.com/in/arshia-talwar-151a9a258",
      github: null,
      insta: "https://www.instagram.com/arshia-talwar",
      x: null,
      tagline: "Engineering Creativity, Designing Possibilities",
    },
    {
      name: "Aman Sahi",
      role: "Technical Team",
      image: "19.png",
      linkedin: "https://www.linkedin.com/in/aman-sahi-19a106285/",
      github: null,
      insta: "https://www.instagram.com/its_aman._21",
      x: "https://x.com/Srivastava14597",
      tagline: "Web Developer Turning Code Into Connection",
    },
    {
      name: "Amit Kumar Mishra",
      role: "Technical Team",
      image: "18.png",
      linkedin: "https://www.linkedin.com/in/amit-mishra-330aa2251/",
      github: null,
      insta: null,
      x: "https://x.com/Akm9508",
      tagline: "Learning to solve problems with code and logic",
    },
    {
      name: "Anubhav Singh",
      role: "Technical Team",
      image: "14.png",
      linkedin: "https://www.linkedin.com/in/anubhav-singh99/",
      github: "https://github.com/AnubhavSingh99",
      insta: "https://www.instagram.com/anu.bhav_pvtt",
      x: "https://x.com/Anubhavsingh99x",
      tagline: "You know what that is? Simply lovely",
    },
    {
      name: "Dhruv Gupta",
      role: "Technical Team",
      image: "13.png",
      linkedin: "https://www.linkedin.com/in/dhruv-gupta-16g",
      github: null,
      insta: "https://www.instagram.com/dhruv_.gupta_16",
      x: "https://x.com/DhruvG__",
      tagline: "Driven by curiosity, learning, and meaningful connections.",
    },
    {
      name: "Sarvesh Mishra",
      role: "Technical Team",
      image: "7.png",
      linkedin: "https://www.linkedin.com/in/sarveshji/",
      github: "https://github.com/SarveshCS",
      insta: "https://www.instagram.com/sarveshmishra.py/",
      x: "https://x.com/sarvesh_aham",
      tagline: "Transforming curiosity into code, and code into change.",
    },
    {
      name: "Shubhankar Nath",
      role: "Technical Team",
      image: "6.png",
      linkedin: "https://www.linkedin.com/in/shubhankar-nath-ab8549265/",
      github: null,
      insta: null,
      x: null,
      tagline: "no tagline",
    },
    {
      name: "Suryansh Gupta",
      role: "Technical Team",
      image: "5.png",
      linkedin: "www.linkedin.com/in/suryanshgupta483",
      github: null,
      insta: "https://www.instagram.com/__suryanshgupta___",
      x: "https://x.com/Suryans11676947",
      tagline:
        "Eager to learn, grounded in my roots, and determined to do better every day.",
    },
    {
      name: "Tarun Gupta",
      role: "Technical Team",
      image: "4.png",
      linkedin: "https://www.linkedin.com/in/tarun-gupta-44888b250",
      github: null,
      insta: null,
      x: null,
      tagline: "Focus on yourself",
    },
    {
      name: "Abhinav Maurya",
      role: "Design Team",
      image: "24.png",
      linkedin: "https://www.linkedin.com/in/abhinav-maurya-356136315",
      github: null,
      insta: "https://www.instagram.com/maur_yaabhinav",
      x: null,
      tagline: "Elevating creativity, enhancing brands",
    },
    {
      name: "Ansh Pratap",
      role: "Design Team",
      image: "22.png",
      linkedin: "https://www.linkedin.com/in/ansh-pratap-93083133b",
      github: null,
      insta: "https://www.instagram.com/itxansh._create",
      x: "https://x.com/4nssh",
      tagline: "Precision in every pixel",
    },
    {
      name: "Kapil Singh",
      role: "Design Team",
      image: "12.png",
      linkedin: "https://www.linkedin.com/in/kapil-singh-8a6574203",
      github: null,
      insta: "https://www.instagram.com/ksbhati0471",
      x: "https://x.com/Kapil4227307",
      tagline: "The epitome of video editing",
    },
    {
      name: "Manasvi Goel",
      role: "Design Team",
      image: "11.png",
      linkedin: "www.linkedin.com/in/manasvigl",
      github: null,
      insta: "https://www.instagram.com/manasvi.gl",
      x: "https://x.com/manasvi_gl",
      tagline: "Coding the Dream, Designing the Reality",
    },
    {
      name: "Aditya Kumar Jha",
      role: "Event Management",
      image: "21.png",
      linkedin: "https://in.linkedin.com/in/adityajha12",
      github: null,
      insta: "https://www.instagram.com/a_d_i_t_y_a_00_3",
      x: null,
      tagline: "Jada bolne wala insaan",
    },
    {
      name: "Aman Bajpai",
      role: "Event Management",
      image: "20.png",
      linkedin: "https://www.linkedin.com/in/aman-bajpai-651a87266",
      github: null,
      insta: "https://www.instagram.com/_aman_pandit_28",
      x: "https://x.com/AmanBaj26559642",
      tagline: "Wanderer with a Restless Soul.",
    },
    {
      name: "Mansi Pandey",
      role: "Event Management",
      image: "9.png",
      linkedin: "https://www.linkedin.com/in/mansi-pandey-50766526b/",
      github: null,
      insta: "https://www.instagram.com/mansiiiiiii._p",
      x: "https://x.com/Mansi_Pandey24",
      tagline: "Your vision, our expertise—together we create magic",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url('/team-bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 m-10 text-center">
          Meet the Dream Team Behind the Magic!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8">
          {teamMembers.map((member, index) => {
            const gradient = gradients[index % gradients.length];
            return (
              <motion.div
                key={index}
                className="relative rounded-lg p-10 flex flex-col items-center overflow-hidden shadow-md transform transition-all duration-300 ease-in-out"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: index * 0.1 },
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-t ${gradient[0]} ${gradient[1]} transition-opacity duration-500`}
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    zIndex: -1,
                  }}
                ></motion.div>
                <motion.img
                  src={`/images/${member.image}`}
                  alt={member.name}
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-3 transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-110" : ""
                  }`}
                  style={{
                    borderRadius: hoveredIndex === index ? "0.5rem" : "50%",
                    transition: "transform 0.3s ease, border-radius 0.3s ease",
                  }}
                />
                <motion.h3 className="text-lg md:text-xl font-bold text-gray-800 text-center">
                  {member.name}
                </motion.h3>
                <motion.p
                  className={`text-sm md:text-md text-center mb-4 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-gray-900" : "text-gray-600"
                  }`}
                  style={{
                    textShadow:
                      hoveredIndex === index
                        ? "1px 1px 2px rgba(0, 0, 0, 0.2)"
                        : "none",
                  }}
                >
                  {member.role}
                </motion.p>
                <motion.p
                  className={`text-xs md:text-sm text-center mb-4 text-gray-500 flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index
                      ? "text-gray-900 font-semibold scale-105"
                      : "text-gray-500"
                  }`}
                  style={{
                    lineHeight: "1.25rem",
                    height: "3rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    padding: "0.25rem",
                    borderRadius: "0.25rem",
                    transition:
                      "color 0.3s ease, font-weight 0.3s ease, transform 0.3s ease",
                  }}
                >
                  {member.tagline}
                </motion.p>
                <div className="flex space-x-4 mt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-transform transform hover:scale-110 shadow-md">
                        <CiLinkedin className="w-6 h-6 text-blue-600" />
                      </div>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-transform transform hover:scale-110 shadow-md">
                        <FaGithub className="w-6 h-6 text-gray-800" />
                      </div>
                    </a>
                  )}
                  {member.insta && (
                    <a
                      href={member.insta}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 transition-transform transform hover:scale-110 shadow-md">
                        <FaInstagram className="w-6 h-6 text-red-500" />
                      </div>
                    </a>
                  )}
                  {member.x && (
                    <a
                      href={member.x}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-transform transform hover:scale-110 shadow-md">
                        <FaXTwitter className="w-6 h-6 text-black-500" />
                      </div>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default TeamPage;
