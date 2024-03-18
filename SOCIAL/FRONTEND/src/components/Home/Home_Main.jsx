import React from 'react';

const HomeMain = () => {
  return (
    <div className="bg-[#f7e8e8] flex flex-row items-center p-6 rounded-lg shadow-md">
      <div className="relative mb-4">
        <div className="absolute -inset-1 bg-[#00a2ff] rounded-full blur opacity-50" />
        <img
          alt="Child smiling"
          className="relative w-32 h-32 rounded-full border-4 border-white"
          height="128"
          src="/placeholder.svg"
          style={{
            aspectRatio: "128/128",
            objectFit: "cover",
          }}
          width="128"
        />
      </div>
      <div className='flex flex-col ml-4 space-y-4'>
        <h1 className="text-2xl font-bold text-gray-800">
          United in compassion, creating a better world for all.
        </h1>
        <p className="text-sm text-gray-600">
          It is about giving back to the community, and making the world a better place
        </p>
        <button className="bg-[#bd1e59] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#9c1a4a] focus:outline-none focus:ring-2 focus:ring-[#bd1e59] focus:ring-opacity-50">
          Make a Donation
        </button>
      </div>
    </div>
  );
}

export default HomeMain;
