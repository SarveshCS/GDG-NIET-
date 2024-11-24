import React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Anusha Tiwari',
      role: 'GDSC Lead',
      image: '1.png'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Core Member',
      image: '2.png'
    },
    {
      name: 'Neha Sharma',
      role: 'Event Coordinator',
      image: '3.png'
    },
    {
      name: 'Vikas Mehta',
      role: 'Technical Lead',
      image: '4.png'
    },
    {
      name: 'Priya Singh',
      role: 'Marketing Head',
      image: '5.png'
    },
    {
      name: 'Amit Patel',
      role: 'Graphic Designer',
      image: '6.png'
    },
    {
      name: 'Riya Kapoor',
      role: 'Social Media Manager',
      image: '7.png'
    },
    {
      name: 'Karan Gupta',
      role: 'Content Creator',
      image: '8.png'
    },
    {
      name: 'Meera Jain',
      role: 'Outreach Lead',
      image: '9.png'
    },
    {
      name: 'Siddharth Verma',
      role: 'DevOps Specialist',
      image: '10.png'
    },
    {
      name: 'Alok Yadav',
      role: 'Backend Developer',
      image: '11.png'
    },
    {
      name: 'Pooja Raj',
      role: 'Frontend Developer',
      image: '12.png'
    },
    {
      name: 'Nikhil Das',
      role: 'UI/UX Designer',
      image: '13.png'
    },
    {
      name: 'Shruti Chawla',
      role: 'Project Manager',
      image: '14.png'
    },
    {
      name: 'Rohan Bansal',
      role: 'AI/ML Specialist',
      image: '15.png'
    },
    {
      name: 'Ishita Aggarwal',
      role: 'Blockchain Developer',
      image: '16.png'
    },
    {
      name: 'Arjun Sen',
      role: 'Full Stack Developer',
      image: '17.png'
    },
    {
      name: 'Sanya Gupta',
      role: 'Cybersecurity Analyst',
      image: '18.png'
    },
    {
      name: 'Raghav Tandon',
      role: 'Database Administrator',
      image: '19.png'
    },
    {
      name: 'Kanika Mathur',
      role: 'Quality Assurance',
      image: '20.png'
    },
    {
      name: 'Harshdeep Singh',
      role: 'Mobile App Developer',
      image: '21.png'
    },
    {
      name: 'Sneha Roy',
      role: 'Community Manager',
      image: '22.png'
    },
    {
      name: 'Mohit Sharma',
      role: 'Tech Speaker',
      image: '23.png'
    },
    {
      name: 'Aarav Joshi',
      role: 'Strategist',
      image: '24.png'
    }
  ];

  return (
    <>
      <Navbar />
      <div className=" cursor-pointermin-h-screen bg-[url('/team-bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-black m-10">Meet the Team...</h1>
        <div className="grid grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg p-4 flex flex-col items-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } }}
            >
              <motion.img
                src={`/images/${member.image}`}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <motion.h3 
                className="text-xl font-bold"
                whileHover={{ y: -5, color: "#1d4ed8" }}
                transition={{ duration: 0.2 }}
              >
                {member.name}
              </motion.h3>
              <motion.p 
                className="text-gray-500"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
