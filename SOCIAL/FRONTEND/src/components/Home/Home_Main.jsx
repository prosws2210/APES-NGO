import React from 'react';
import { Link } from 'react-router-dom';


const HomeMain = () => {
  return (
    <div className='bg-violet-50 flex flex-col items-center justify-center py-8 px-20'>
      <h1 className='text-5xl font-serif font-bold text-black pt-8 pb-16'>WELCOME TO IMPROVEMENT IN SOCIAL CAUSES</h1>      <div className="flex flex-row gap-10 items-center justify-center">
        {/* Image div */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-50" />
          <img
            alt="Child smiling"
            className="relative rounded-full border-4 border-white"
            height="2800"
            src="/assets/images/poverty images/image_19.jpg"
            width="2800"
          />
        </div>

        {/* Text div */}
        <div className='flex flex-col ml-4 space-y-4 pt-6'>
          <h1 className="text-3xl text-center font-bold text-gray-800">
            "United in compassion, creating a better world for all"
          </h1>
          <p className="text-lg text-gray-600">
            Our mission is rooted in a deep-seated belief in compassion and the interconnectedness of all beings. We are committed to fostering a culture of giving, understanding, and mutual respect in our community. We believe that each individual has the power to make a significant impact in our world. By giving back to the community, we are not only enhancing the lives of others but also enriching our own. Our efforts extend beyond mere charity. We strive to empower individuals, uplift communities, and instigate systemic change. Join us in making the world a better place, one act of compassion at a time.
          </p>

          <div className="flex justify-start">
            <Link to="http://localhost:2000/donation">
              <button className="bg-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-opacity-50">
                Make a Donation
              </button>
            </Link>
          </div>
          <div className="mt-4 text-gray-600">
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

export default HomeMain;
