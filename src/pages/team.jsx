import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Anusha Tiwari',
      role: 'GDSC Lead',
      image: 'anusha-tiwari.jpg'
    },
    {
      name: 'Vishnu Shon',
      role: 'Operations Core Team',
      image: 'vishnu-shon.jpg'
    },
    {
      name: 'Tushar Chandra',
      role: 'Cybersecurity Team',
      image: 'tushar-chandra.jpg'
    },
    {
      name: 'Ramanjeet Singh',
      role: 'Web Development Team',
      image: 'ramanjeet-singh.jpg'
    },
    {
      name: 'John Doe',
      role: 'Design Team',
      image: 'john-doe.jpg'
    },
    {
      name: 'Jane Doe',
      role: 'Mobile Development Team',
      image: 'jane-doe.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[url('/team-bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Meet the Team...</h1>
      <div className="grid grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img src={`/images/${member.image}`} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;