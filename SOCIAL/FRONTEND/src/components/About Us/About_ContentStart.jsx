import React from 'react';
import { FaInfo } from 'react-icons/fa';

const AboutContentStart = () => {
  return (
    <div className="bg-gray-100 p-6 max-w-full mx-auto rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-red-600 uppercase">About Us</h2>
        <FaInfo className="text-red-600" />
      </div>
      <h3 className="text-2xl font-bold text-red-600 mb-3">Highest form of love & empathy</h3>
      <p className="text-gray-700 mb-5">
        UMEED, a non-profit organization, empowers marginalized communities through education, healthcare, and
        sustainable development initiatives, fostering hope and creating opportunities for a brighter future for all.
      </p>
      <h3 className="text-2xl font-bold text-red-600 mb-3">Selfless love of one's fellow men</h3>
      <p className="text-gray-700 mb-6">
        UMEED Foundation embodies the essence of charity—a beacon of hope for those in need. Through education, health
        initiatives, environmental care, and aid distribution, UMEED transforms lives across India.
      </p>
      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">Be a Volunteer</button>
    </div>
  );
}

export default AboutContentStart;
