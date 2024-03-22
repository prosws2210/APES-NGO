import React, { useState } from 'react';

const Box = ({ imgSrc, altText, name, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-2xl transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-110">
      <div className="text-center">
        <div className='flex flex-col pb-4 items-center justify-center'>
            <div className="bg-blue-300 rounded-full p-8 w-fit mx-auto">
                <img className="w-12 h-12 mx-auto" src={imgSrc} alt={altText} />
            </div>
            <h5 className="font-bold text-lg pt-4 text-center">{name}</h5>
        </div>
        <p className="text-sm text-[13px]">{description}</p>
      </div>
    </div>
  );
};

const HomeKeyFeatures = () => {
  const [showMore, setShowMore] = useState(false);

  const keyFeaturesData = [
    // Your data here
    {
      imgSrc: "assets\\images\\food images\\boralogo.png",
      altText: "Mass food",
      name: "Mass food",
      description: "Join us in making a positive impact by donating bulk food to NGOs, helping to alleviate hunger and support individuals in need.",
    },
    {
      imgSrc: "assets\\images\\food images\\foodlogo.png",
      altText: "Mid-day Meal",
      name: "Mid-day Meal",
      description: "Help combat hunger for the impoverished by supporting the NGO's mid day meal's initiative.",
    },
    {
      imgSrc: "assets\\images\\food images\\restaurantlogo.png",
      altText: "Surplus food",
      name: "Surplus food",
      description: "Restaurants and event organizers can be contacted by individuals or organizations who want to donate any leftover or excess food.",
    },
  ];

  const itemsToShow = showMore ? keyFeaturesData : keyFeaturesData.slice(0, 4);

  return (
    <div className="bg-[#ede7ce] px-20 py-8 text-center">
      <h2 className="text-2xl font-bold text-[#721c24] mb-4">OUR FEATURES</h2>
      <p className="text-lg text-[#721c24] mb-8">
        You can make a difference by supporting us and for being an
        <strong> UMEED!!</strong>
        <br />
        Your donation can help to change lives.
      </p>
      <div className="grid pb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsToShow.map((feature, index) => (
          <Box key={index} {...feature} />
        ))}
      </div>
      {/* {showMore ? (
        <button onClick={() => setShowMore(false)} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          See Less
        </button>
      ) : (
        <button onClick={() => setShowMore(true)} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          See More
        </button>
      )} */}
    </div>
  );
};

export default HomeKeyFeatures;
