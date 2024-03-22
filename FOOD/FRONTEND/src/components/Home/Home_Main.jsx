import React from 'react';
import { Link } from 'react-router-dom';


const HomeMain = () => {
  return (
    <div className='bg-violet-50 flex flex-col items-center justify-center py-8 px-20'>
      <h1 className='text-5xl font-serif font-bold text-black pt-8 pb-16'>WELCOME TO ENHANCING YOUR NUTRITION</h1>      
      <div className="flex flex-row gap-10 items-center justify-center">
        {/* Image div */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-50" />
          <img
            alt="Child smiling"
            className="relative rounded-full border-4 border-white"
            height="2800"
            src="/assets/images/food/food20.jpeg"
            width="2800"
          />
        </div>

        {/* Text div */}
        <div className='flex flex-col ml-4 space-y-4 pt-6'>
          <h1 className="text-3xl text-center font-bold text-gray-800">
            "Harvesting Hope: A Food Campaign for Community Well-Being"
          </h1>
          <p className="text-lg text-gray-600">
            At our core, we believe in compassion and the unity of all beings. Through our food provision program, we aim to foster understanding and respect in our community. Each meal we provide makes a meaningful impact, not only nourishing bodies but also spirits. We go beyond charity, empowering individuals and sparking systemic change. Join us in making our world better, one act of compassion at a time.
            Our efforts extend beyond simply providing meals. We strive to empower individuals to break the cycle of food insecurity, uplift communities, and instigate systemic change in the way we approach hunger relief. Join us in our mission to make the world a better place, one nourishing meal at a time. Together, through acts of compassion, we can create a more equitable and sustainable future for all.
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
