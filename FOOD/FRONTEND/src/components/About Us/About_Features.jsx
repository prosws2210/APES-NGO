import React, { useState } from 'react';

const Box = ({ imgSrc, altText, name, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-2xl transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-110">
      <div className="text-center">
        <div className='flex flex-col pb-2 items-center justify-between'>
          <div className='flex flex-row items-center justify-center gap-7'>
            <div className="rounded-2xl w-fit mx-auto">
                <img className="w-20 h-20 rounded-2xl mx-auto" src={imgSrc} alt={altText} />
            </div>
            <h5 className="font-bold text-lg pt-4 text-center">{name}</h5>
          </div>
        </div>
        <p className="text-sm text-[13px]">{description}</p>
      </div>
    </div>
  );
};

const AboutFeatures = () => {
  const [showMore, setShowMore] = useState(false);

  const keyFeaturesData = [
    {
      imgSrc: "assets\\images\\volunteer\\man1.jpg",
      altText: "Aarav Kumar",
      name: "Aarav Kumar",
      description: "Aarav Kumar has dedicated himself to blood donation, saving countless lives and spreading smiles of hope through his generous contributions.",
    },
    {
      imgSrc: "assets\\images\\volunteer\\Screenshot 2024-03-23 013921.png",
      altText: "Anaya Patel",
      name: "Anaya Patel",
      description: "Anaya Patel's passion for promoting literacy shines through her book donations, enriching minds and fostering a love for learning among those in need.",
    },
    {
      imgSrc: "assets\\images\\volunteer\\Man2.jpeg",
      altText: "Ishaan Sharma",
      name: "Ishaan Sharma",
      description: "Ishaan Sharma's cloth donations spread warmth and hope, providing comfort to those facing adversity and lighting up lives with kindness.",
    },
    {
      imgSrc: "assets\\images\\volunteer\\Screenshot 2024-03-23 013939.png",
      altText: "Diya Gupta",
      name: "Diya Gupta",
      description: "Diya Gupta's food donations nourish souls and bring communities together, making a tangible difference in the fight against hunger and poverty.",
    },
    {
      imgSrc: "assets\\images\\volunteer\\man3.jpeg",
      altText: "Kabir Singh",
      name: "Kabir Singh",
      description: "Kabir Singh's monetary contributions change lives, offering hope and opportunities for a brighter future to those in need.",
    },
    {
      imgSrc: "assets\\images\\volunteer\\Screenshot 2024-03-23 013957.png",
      altText: "Aadhya Verma",
      name: "Aadhya Verma",
      description: "Aadhya Verma volunteers tirelessly, embodying the spirit of service and making a meaningful impact in her community.",
    },
    {
      imgSrc: "assets\\images\\volunteer\\man4.jpeg",
      altText: "Vihaan Reddy",
      name: "Vihaan Reddy",
      description: "Vihaan Reddy's donations uplift lives, serving as a beacon of hope and possibility for those facing adversity.",
    },
    {
      imgSrc: "assets\\images\\volunteer\\Screenshot 2024-03-23 014013.png",
      altText: "Ananya Desai",
      name: "Ananya Desai",
      description: "Ananya Desai's support for education initiatives empowers young minds, shaping a brighter future for generations to come.",
    },
    {
      imgSrc: "assets\\images\\volunteer\\man5.jpeg",
      altText: "Advik Joshi",
      name: "Advik Joshi",
      description: "Advik Joshi's contributions to healthcare projects provide critical medical aid to those in need, bringing healing and hope to the most vulnerable.",
    },
  ];


  const itemsToShow = showMore ? keyFeaturesData : keyFeaturesData.slice(0, 4);

  return (
    <div className="bg-[#f8d7da] px-20 py-8 text-center">
      <h2 className="text-2xl font-bold text-[#721c24] mb-4">OUR VOLUNTEERS</h2>
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
      {showMore ? (
        <button onClick={() => setShowMore(false)} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          See Less
        </button>
      ) : (
        <button onClick={() => setShowMore(true)} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          See More
        </button>
      )}
    </div>
  );
};

export default AboutFeatures;
