import React from 'react';
import { FaHeart, FaBook, FaPaw } from 'react-icons/fa';

const StoriesFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold mb-6">Read Stories</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#FDE8E9] p-4">
          <div className="flex items-center mb-4">
            <FaHeart className="mr-2" />
            <span className="font-semibold">ACCOMPLISHED TALES</span>
          </div>
          <p className="italic text-lg mb-4">
            "Beach cleaning is the altruistic act of helping to clean up beaches, involving giving time and energy
            without expecting anything in return."
          </p>
          <hr className="border-t-2 border-[#D1D5DB] my-4" />
          <p className="font-semibold">Rajesh Khanna</p>
        </div>
        <div className="bg-[#FDE8E9] p-4">
          <div className="flex items-center mb-4">
            <FaBook className="mr-2" />
            <span className="font-semibold">ACCOMPLISHED TALES</span>
          </div>
          <p className="italic text-lg mb-4">
            "A book donation drive involves altruistically giving books to those in need, without expecting any form
            of compensation in return."
          </p>
          <hr className="border-t-2 border-[#D1D5DB] my-4" />
          <p className="font-semibold">Rajesh Khanna</p>
        </div>
        <div className="bg-[#FDE8E9] p-4">
          <div className="flex items-center mb-4">
            <FaPaw className="mr-2" />
            <span className="font-semibold">ACCOMPLISHED TALES</span>
          </div>
          <p className="italic text-lg mb-4">
            "Volunteering at animal shelters is a selfless way to provide care and attention to animals in need,
            without any expectation of reward."
          </p>
          <hr className="border-t-2 border-[#D1D5DB] my-4" />
          <p className="font-semibold">Rajesh Khanna</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Show More</button>
      </div>
    </div>
  );
}

export default StoriesFeatures;
