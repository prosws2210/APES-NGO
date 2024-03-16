import React from 'react';

const About_Content = () => {
  return (
    <div className="flex items-center px-20 pt-12 pb-4">
      {/* Photo on the left */}
      <div className="max-w-[500px] mr-8">
        <div className="relative">
          <img
            src="assets/images/blog/blog_04.jpg"
            alt=""
            className="w-full h-auto rounded-md shadow-xl border-8 border-neutral-100"
            loading='lazy'
          />
        </div>
      </div>

      {/* Text on the right */}
      <div className="max-w">
        <h2 className="text-2xl font-bold mb-4">Welcome to APES NGO - Empowering Communities, Advancing Change</h2>
        <p className="text-gray-700">
          At APES NGO, we are dedicated to fostering positive change and sustainable development within communities worldwide. Our commitment to advancing social and environmental causes is unwavering, as we strive to create a better future for all.
        </p>

        <p className="mt-4 text-gray-700">
          Through our relentless efforts, we stand as a beacon of hope, driving impactful initiatives that empower individuals and promote environmental stewardship. With a focus on innovation and collaboration, we aim to address pressing challenges and inspire meaningful solutions.
        </p>

        <p className="mt-4 text-gray-700">
          Our work is fueled by a team of passionate individuals and supported by state-of-the-art resources, ensuring the highest standards of excellence in all our endeavors. Together, we are making a difference, one community at a time.
        </p>

        <p className="mt-4 text-gray-700">
          Join us in our mission to create a brighter, more sustainable world for generations to come.
        </p>
        {/* Add more paragraphs with the same styling */}
      </div>
    </div>
  );
};

export default About_Content;
