import React from 'react';
import { Link } from 'react-router-dom';


const HomeMain = () => {
  return (
    <div className='bg-violet-50 flex flex-col items-center justify-center py-8 px-20'>
      <h1 className='text-5xl font-serif font-bold text-black pt-8 pb-16'>WELCOME TO IMPROVEMENT IN EDUCATION</h1>      <div className="flex flex-row gap-10 items-center justify-center">
        {/* Image div */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-50" />
          <img
            alt="Child smiling"
            className="relative rounded-full border-4 border-white"
            height="3200"
            src="/assets/images/education images/image_12.jpg"
            width="3200"
          />
        </div>

        {/* Text div */}
        <div className='flex flex-col ml-4 space-y-4 pt-6'>
          <h1 className="text-3xl text-center font-bold text-gray-800">
            "Educate to Empower: Igniting Minds, Transforming Lives!"
          </h1>
          <p className="text-lg text-gray-600">
            Our NGO is dedicated to transforming lives through education by providing comprehensive programs that address diverse needs, including literacy, numeracy, vocational training, lifelong learning, and digital literacy, while supporting educational infrastructure. Our vision is to create accessible, equitable, and transformative educational opportunities for all, empowering individuals and communities to reach their full potential. Through our holistic approach, we have significantly improved literacy rates, empowered individuals economically, fostered a culture of lifelong learning, and promoted digital inclusion. Education is a powerful tool for empowerment and social change, and we invite everyone to join us in building a better world through education.
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
