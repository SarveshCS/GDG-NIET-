import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md ${className}`}
    {...props}
  >
    {children}
    <ArrowRightIcon className="w-5 h-5 ml-3" />
  </button>
);

const AboutTheCommunity = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-blue-500 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-green-500 rounded-full blur-[100px] opacity-30"></div>
      <div className="grid grid-cols-1 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 relative z-10">About The Community</h2>
          <p className="text-gray-600 mb-8 relative z-10 text-lg">
            What we do and How we are so good at it... !
          </p>
          <div className="bg-blue-50 rounded-lg p-8 relative z-10">
            <h3 className="text-2xl font-bold mb-4">What's GDSC?</h3>
            <p className="text-gray-800 mb-6 text-lg">
              Google collaborates with university students who are passionate about growing developer communities. GDSC is an Organisation for university students who want to bring about a change through technology. We are focused upon building technical and non-technical skills, which would help students to build a better community.
            </p>
            <div className="flex items-center text-gray-600 mb-6 text-lg">
              <ArrowRightIcon className="w-5 h-5 mr-3" />
              <span># Lets Learn, Grow and Innovate together.</span>
            </div>
            <Button className="relative z-10">Know More</Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/il1.png"
            alt="GDSC Community"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-white p-6 rounded-lg shadow-md -mb-8 -ml-8">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-800 mb-6 text-lg">
              To empower students and build a better developer community through technology.
            </p>
            <Button className="relative z-10">Learn More</Button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 relative z-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-8 relative z-10">
            <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
            <p className="text-gray-800 mb-4 text-lg">
              We believe in the power of collaboration and teamwork to achieve our goals.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-8 relative z-10">
            <h3 className="text-2xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-800 mb-4 text-lg">
              We encourage innovative thinking and embrace new technologies to drive change.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-8 relative z-10">
            <h3 className="text-2xl font-bold mb-3">Community</h3>
            <p className="text-gray-800 mb-4 text-lg">
              Building a strong, supportive community is at the heart of what we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheCommunity;