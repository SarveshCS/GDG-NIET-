import React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer2 from '@/components/footer';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Anusha Tiwari',
      role: 'GDSC Lead',
      image: '1.png',
      tagline: "Empowering students to become tech leaders of tomorrow",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Rajesh Kumar',
      role: 'Core Member',
      image: '2.png',
      tagline: "Building bridges between ideas and implementation",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Neha Sharma',
      role: 'Event Coordinator',
      image: '3.png',
      tagline: "Creating memorable experiences through innovative events",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Vikas Mehta',
      role: 'Technical Lead',
      image: '4.png',
      tagline: "Turning complex problems into elegant solutions",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Priya Singh',
      role: 'Marketing Head',
      image: '5.png',
      tagline: "Crafting stories that connect technology with people",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Amit Patel',
      role: 'Graphic Designer',
      image: '6.png',
      tagline: "Where creativity meets pixel-perfect precision",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Riya Kapoor',
      role: 'Social Media Manager',
      image: '7.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Karan Gupta',
      role: 'Content Creator',
      image: '8.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Meera Jain',
      role: 'Outreach Lead',
      image: '9.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Siddharth Verma',
      role: 'DevOps Specialist',
      image: '10.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Alok Yadav',
      role: 'Backend Developer',
      image: '11.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Pooja Raj',
      role: 'Frontend Developer',
      image: '12.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Nikhil Das',
      role: 'UI/UX Designer',
      image: '13.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Shruti Chawla',
      role: 'Project Manager',
      image: '14.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Rohan Bansal',
      role: 'AI/ML Specialist',
      image: '15.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Ishita Aggarwal',
      role: 'Blockchain Developer',
      image: '16.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Arjun Sen',
      role: 'Full Stack Developer',
      image: '17.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Sanya Gupta',
      role: 'Cybersecurity Analyst',
      image: '18.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Raghav Tandon',
      role: 'Database Administrator',
      image: '19.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Kanika Mathur',
      role: 'Quality Assurance',
      image: '20.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Harshdeep Singh',
      role: 'Mobile App Developer',
      image: '21.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Sneha Roy',
      role: 'Community Manager',
      image: '22.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Mohit Sharma',
      role: 'Tech Speaker',
      image: '23.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    },
    {
      name: 'Aarav Joshi',
      role: 'Strategist',
      image: '24.png',
      tagline: "Leading with innovation and passion",
      description: "4+ years of experience in community leadership. Passionate about empowering students through technology."
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url('/team-bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-black m-10">Meet the Team...</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className={`relative bg-white rounded-lg p-3 md:p-4 flex flex-col items-center aspect-square ${
                hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm' : ''
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.img
                src={`/images/${member.image}`}
                alt={member.name}
                className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <motion.h3 
                className="text-base md:text-lg font-bold text-center"
                whileHover={{ y: -5, color: "#1d4ed8" }}
              >
                {member.name}
              </motion.h3>
              <motion.p className="text-xs md:text-sm text-gray-500 text-center">
                {member.role}
              </motion.p>
              
              {/* Updated Hover Content */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-90 rounded-lg flex flex-col p-2 md:p-4"
                >
                  {/* Top Section */}
                  <motion.div 
                    className="border-b border-gray-500 pb-1 md:pb-2"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                  >
                    <h4 className="text-white font-bold text-base md:text-lg">{member.name}</h4>
                    <p className="text-blue-400 text-xs md:text-sm">{member.role}</p>
                  </motion.div>
                  
                  {/* Middle Section - Tagline */}
                  <motion.div 
                    className="flex-1 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative w-full overflow-hidden">
                      <span className="absolute -left-2 top-0 text-blue-400 text-lg">"</span>
                      <p className={`text-white font-medium text-center italic px-2 ${
                        member.tagline.length > 150 ? 'text-[8px]' :
                        member.tagline.length > 100 ? 'text-[10px]' :
                        member.tagline.length > 70 ? 'text-[12px]' :
                        'text-sm'
                      } leading-tight`}>
                        {member.tagline}
                      </p>
                      <span className="absolute -right-2 bottom-0 text-blue-400 text-lg">"</span>
                    </div>
                  </motion.div>
                  
                  {/* Bottom Section - Description */}
                  <motion.div 
                    className="border-t border-gray-500 "
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                  >
                    <p className={`text-gray-300 ${
                      member.description.length > 250 ? 'text-[7px]' :
                      member.description.length > 200 ? 'text-[8px]' :
                      member.description.length > 150 ? 'text-[9px]' :
                      member.description.length > 100 ? 'text-[10px]' :
                      'text-xs'
                    } leading-tight line-clamp-4 overflow-hidden`}>
                      {member.description}
                    </p>
                  </motion.div>
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
