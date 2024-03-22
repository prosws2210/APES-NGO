import React, { useState } from 'react';

const Box = ({ imgSrc, altText, name, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-2xl transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-110">
      <div className="text-center">
        <div className='flex flex-col pb-4 items-center justify-center'>
            <div className="bg-blue-300 rounded-full p-4 w-fit mx-auto">
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
      imgSrc: "assets\\images\\Education Icons\\classroom.png",
      altText: "School Partnerships",
      name: "School Partnerships",
      description: "Volunteers of Umeed foundation visits various schools and conduct engaging sessions for the young minds.",
    },
    {
      imgSrc: "assets\\images\\Education Icons\\books.png",
      altText: "Book Donation",
      name: "Book Donation",
      description: "Book donation is a wonderful way to share knowledge, promote literacy, and make a positive impact.",
    },
    {
      imgSrc: "assets\\images\\Education Icons\\library.png",
      altText: "Volunteer in libraries",
      name: "Volunteer in libraries",
      description: "Umeed foundation provides support to public libraries by active donation from the volunteers.",
    },
    {
      imgSrc: "assets\\images\\Education Icons\\support.png",
      altText: "Individual Support",
      name: "Individual Support",
      description: "Committed ,responsible people who are passionate to make a difference are the backbone of Umeed foundation.",
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
      <div className="grid pb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
