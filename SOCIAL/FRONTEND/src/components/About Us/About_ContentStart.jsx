import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const AboutContentStart = () => {
  return (
    <div className='bg-violet-50 flex flex-col items-center justify-center py-8 px-20'>
      <div className="flex flex-row gap-10 items-center justify-center">
        {/* Image div */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-50" />
          <img
            alt="Child smiling"
            className="relative rounded-full border-4 border-white"
            height="900"
            src="/assets/images/poverty images/image_14.jpg"
            width="900"
          />
        </div>  

        {/* Text div */}
        <div className='flex flex-col ml-4 space-y-4 pt-6'>
          <h1 className="text-3xl text-center font-bold text-gray-800">
            "Unified by empathy, striving collectively to improve the world's well-being and equality for every individual's benefit and flourishing."
          </h1>
          <div className=" py-8 px-20 max-w-full mx-auto">
            <div className="flex justify-between items-center space-x-4">
              <div className="bg-white rounded-2xl shadow-2xl w-1/2 p-4">
                <div className="p-4">
                  <Section 
                    title={<b>Highest form of love & empathy</b>} 
                    content="UMEED, a non-profit organization, empowers marginalized communities through education, healthcare, and sustainable development initiatives, fostering hope and creating opportunities for a brighter future for all." 
                  />
                </div>
              </div>

              <div className='bg-white rounded-2xl shadow-2xl w-1/2 p-4'>
                <div className="p-4">
                  <Section 
                    title={<b>Selfless love of one's fellow men</b>} 
                    content="UMEED Foundation embodies the essence of charity—a beacon of hope for those in need. Through education, health initiatives, environmental care, and aid distribution, UMEED transforms lives across India." 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row pl-24 gap-20 items-center justify-start">
            <Link to="http://localhost:2000/donation">
              <button className="bg-[#bd1e59] text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#9c1a4a] focus:outline-none focus:ring-2 focus:ring-[#bd1e59] focus:ring-opacity-50">
                Make a Donation
              </button>
            </Link>
            {/* <button className="bg-[#bd1e59] text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#9c1a4a] focus:outline-none focus:ring-2 focus:ring-[#bd1e59] focus:ring-opacity-50">
              Be a Volunteer
            </button> */}
          </div>
          <div className="mt-4 ml-24 text-gray-600">
            <p className="text-sm">
              Your contribution can make a real difference.
            </p>
            <p className="text-xs mt-2">
              *Donations are tax-deductible.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutContentStart;
