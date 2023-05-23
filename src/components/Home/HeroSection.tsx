import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">I&#39;m a developer specializing in XYZ.</p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
