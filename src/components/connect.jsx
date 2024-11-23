import React from 'react';
import { Instagram, Linkedin, Github, DiscIcon as Discord, Twitter, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const SocialConnect = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: '#',
      bgColor: 'bg-[#E4405F]',
      hoverColor: 'hover:bg-[#d1284a]'
    },
    {
      name: 'Linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      url: '#',
      bgColor: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#084d94]'
    },
    {
      name: 'Github',
      icon: <Github className="w-5 h-5" />,
      url: '#',
      bgColor: 'bg-black',
      hoverColor: 'hover:bg-gray-800'
    },
    {
      name: 'Discord',
      icon: <Discord className="w-5 h-5" />,
      url: '#',
      bgColor: 'bg-[#5865F2]',
      hoverColor: 'hover:bg-[#454FBF]'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: '#',
      bgColor: 'bg-[#1DA1F2]',
      hoverColor: 'hover:bg-[#0d8ad6]'
    },
    {
      name: 'Whatsapp',
      icon: <FaWhatsapp className="w-5 h-5" />,
      url: '#',
      bgColor: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#1fb355]'
    },
    {
      name: 'Gmail',
      icon: <Mail className="w-5 h-5" />,
      url: '#',
      bgColor: 'bg-[#EA4335]',
      hoverColor: 'hover:bg-[#d33426]'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#C41E3A]">
        CONNECT WITH US
      </h1>
      <p className="text-gray-600 mb-8 text-lg">
        Wanna Connect ??
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className={`
              ${social.bgColor} ${social.hoverColor}
              text-white px-6 py-2 rounded-full
              flex items-center gap-2
              transition-colors duration-300
              shadow-md hover:shadow-lg
            `}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialConnect;

