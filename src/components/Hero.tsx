import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558904541-efa843a96f01")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional landscaping services in Well, Ontario
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-64}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg cursor-pointer inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;