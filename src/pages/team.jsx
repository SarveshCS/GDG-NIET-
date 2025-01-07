import React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer2 from '@/components/footer';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci"; // Imported CiLinkedin icon
import { FaInstagram } from "react-icons/fa"; // Imported FaInstagram icon

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Anusha Tiwari',
      role: 'GDSC Lead',
      image: '1.png',
      linkedin: 'https://www.linkedin.com/in/anusha',
      github: <FaGithub />,
      insta: 'https://instagram.com/anusha',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Core Member',
      image: '2.png',
      linkedin: 'https://www.linkedin.com/in/rajesh',
      github: <FaGithub />,
      insta: 'https://instagram.com/rajesh',
    },
    {
      name: 'Neha Sharma',
      role: 'Event Coordinator',
      image: '3.png',
      linkedin: 'https://www.linkedin.com/in/neha',
      github: <FaGithub />,
      insta: 'https://instagram.com/neha',
    },
    {
      name: 'Vikas Mehta',
      role: 'Technical Lead',
      image: '4.png',
      linkedin: 'https://www.linkedin.com/in/vikas',
      github: <FaGithub />,
      insta: 'https://instagram.com/vikas',
    },
    {
      name: 'Priya Singh',
      role: 'Marketing Head',
      image: '5.png',
      linkedin: 'https://www.linkedin.com/in/priya',
      github: <FaGithub />,
      insta: 'https://instagram.com/priya',
    },
    {
      name: 'Amit Patel',
      role: 'Graphic Designer',
      image: '6.png',
      linkedin: 'https://www.linkedin.com/in/amit',
      github: <FaGithub />,
      insta: 'https://instagram.com/amit',
    },
    {
      name: 'Riya Kapoor',
      role: 'Social Media Manager',
      image: '7.png',
      linkedin: 'https://www.linkedin.com/in/riya',
      github: <FaGithub />,
      insta: 'https://instagram.com/riya',
    },
    {
      name: 'Karan Gupta',
      role: 'Content Creator',
      image: '8.png',
      linkedin: 'https://www.linkedin.com/in/karan',
      github: <FaGithub />,
      insta: 'https://instagram.com/karan',
    },
    {
      name: 'Meera Jain',
      role: 'Outreach Lead',
      image: '9.png',
      linkedin: 'https://www.linkedin.com/in/meera',
      github: <FaGithub />,
      insta: 'https://instagram.com/meera',
    },
    {
      name: 'Siddharth Verma',
      role: 'DevOps Specialist',
      image: '10.png',
      linkedin: 'https://www.linkedin.com/in/siddharth',
      github: <FaGithub />,
      insta: 'https://instagram.com/siddharth',
    },
    {
      name: 'Alok Yadav',
      role: 'Backend Developer',
      image: '11.png',
      linkedin: 'https://www.linkedin.com/in/alok',
      github: <FaGithub />,
      insta: 'https://instagram.com/alok',
    },
    {
      name: 'Pooja Raj',
      role: 'Frontend Developer',
      image: '12.png',
      linkedin: 'https://www.linkedin.com/in/pooja',
      github: <FaGithub />,
      insta: 'https://instagram.com/pooja',
    },
    {
      name: 'Nikhil Das',
      role: 'UI/UX Designer',
      image: '13.png',
      linkedin: 'https://www.linkedin.com/in/nikhil',
      github: <FaGithub />,
      insta: 'https://instagram.com/nikhil',
    },
    {
      name: 'Shruti Chawla',
      role: 'Project Manager',
      image: '14.png',
      linkedin: 'https://www.linkedin.com/in/shruti',
      github: <FaGithub />,
      insta: 'https://instagram.com/shruti',
    },
    {
      name: 'Rohan Bansal',
      role: 'AI/ML Specialist',
      image: '15.png',
      linkedin: 'https://www.linkedin.com/in/rohan',
      github: <FaGithub />,
      insta: 'https://instagram.com/rohan',
    },
    {
      name: 'Ishita Aggarwal',
      role: 'Blockchain Developer',
      image: '16.png',
      linkedin: 'https://www.linkedin.com/in/ishita',
      github: <FaGithub />,
      insta: 'https://instagram.com/ishita',
    },
    {
      name: 'Arjun Sen',
      role: 'Full Stack Developer',
      image: '17.png',
      linkedin: 'https://www.linkedin.com/in/arjun',
      github: <FaGithub />,
      insta: 'https://instagram.com/arjun',
    },
    {
      name: 'Sanya Gupta',
      role: 'Cybersecurity Analyst',
      image: '18.png',
      linkedin: 'https://www.linkedin.com/in/sanya',
      github: <FaGithub />,
      insta: 'https://instagram.com/sanya',
    },
    {
      name: 'Raghav Tandon',
      role: 'Database Administrator',
      image: '19.png',
      linkedin: 'https://www.linkedin.com/in/raghav',
      github: <FaGithub />,
      insta: 'https://instagram.com/raghav',
    },
    {
      name: 'Kanika Mathur',
      role: 'Quality Assurance',
      image: '20.png',
      linkedin: 'https://www.linkedin.com/in/kanika',
      github: <FaGithub />,
      insta: 'https://instagram.com/kanika',
    },
    {
      name: 'Harshdeep Singh',
      role: 'Mobile App Developer',
      image: '21.png',
      linkedin: 'https://www.linkedin.com/in/harshdeep',
      github: <FaGithub />,
      insta: 'https://instagram.com/harshdeep',
    },
    {
      name: 'Sneha Roy',
      role: 'Community Manager',
      image: '22.png',
      linkedin: 'https://www.linkedin.com/in/sneha',
      github: <FaGithub />,
      insta: 'https://instagram.com/sneha',
    },
    {
      name: 'Mohit Sharma',
      role: 'Tech Speaker',
      image: '23.png',
      linkedin: 'https://www.linkedin.com/in/mohit',
      github: <FaGithub />,
      insta: 'https://instagram.com/mohit',
    },
    {
      name: 'Aarav Joshi',
      role: 'Strategist',
      image: '24.png',
      linkedin: 'https://www.linkedin.com/in/aarav',
      github: <FaGithub />,
      insta: 'https://instagram.com/aarav',
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url('/team-bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
        {/* Beautiful Tagline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 m-10 text-center">
          Meet the Dream Team Behind the Magic!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-lg p-4 flex flex-col items-center aspect-square overflow-hidden shadow-md transition-all duration-300 ease-in-out transform ${
                hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm' : ''
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Image Section */}
              <motion.img
                src={`/images/${member.image}`}
                alt={member.name}
                className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-3"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />

              {/* Name Section */}
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-800 text-center"
                whileHover={{ y: -5 }}
              >
                {member.name}
              </motion.h3>
              
              <motion.p
                className="text-sm md:text-md text-gray-600 text-center mb-4"
                whileHover={{ y: -5 }}
              >
                {member.role}
              </motion.p>
              
              {/* Social Media Links */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex flex-col p-4 justify-center items-center"
                >
                  <div>
                    <div className='text-white'>
                      {member.name}
                    </div>
                    <div className='text-white'>
                      {member.role}
                    </div>
                    <div className="flex space-x-4">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <CiLinkedin className="w-7 h-7 text-blue-600 hover:text-white transition" />
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-7 h-7 text-black hover:text-gray-600 transition" />
                      </a>
                      <a href={member.insta} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-7 h-7 text-red-500 hover:text-white transition" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default TeamPage;
