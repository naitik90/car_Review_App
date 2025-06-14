import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="max-w-4xl w-full bg-white border border-gray-300 rounded-lg p-6 shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">About CarReviewHub</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to CarReviewApp, your one-stop destination for comprehensive and unbiased car reviews. Whether you're a car enthusiast looking to stay updated with the latest models or a potential buyer seeking the best vehicle to suit your needs, we've got you covered.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          At CarReviewApp, you can explore detailed reviews on a wide range of cars available on the internet. Our platform allows users to create new car review posts or browse through reviews posted by others. We strive to provide an engaging and informative space for car lovers to share their insights and experiences.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our goal is to help you make informed decisions by offering reliable information and diverse perspectives on various car models. Join our community today and contribute your reviews to help others find their perfect car.
        </p>
      </div>
    </div>
  );
};

export default About;
