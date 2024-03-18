import React from 'react';

const Box = ({ imgSrc, altText, name, volunteerLocation, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="text-center">
        <div className='flex flex-col pb-4 items-center justify-center'>
            <div className='flex items-center gap-8'>
                <div className="bg-blue-300 rounded-full p-4 w-fit mx-auto">
                    <img className="w-12 h-12 mx-auto" src={imgSrc} alt={altText} />
                </div>
                <h5 className="font-bold text-md pt-4 pb-2">{name}</h5>
            </div>
          <p className="italic text-xs text-gray-600">{volunteerLocation}</p>
        </div>
        <p className="text-sm text-gray-800">{description}</p>
      </div>
    </div>
  );
};

const AboutFeatures = () => {
  const keyFeaturesData = [
    {
      imgSrc: "assets\\images\\Key features\\heart-rate-monitor.png",
      altText: "Heart Rate Monitor",
      name: "John Smith",
      volunteerLocation: "Blood Donation",
      description: "Every drop counts: donate blood, save lives, and be the reason someone smiles today.",
    },
    {
      imgSrc: "assets\\images\\Key features\\doctor (3).png",
      altText: "Experienced Doctors",
      name: "Emily Johnson",
      volunteerLocation: "Book Donation",
      description: "Book donation is a wonderful way to share knowledge, promote literacy, and make a positive impact.",
    },
    {
      imgSrc: "assets\\images\\Key features\\head-side-view.png",
      altText: "High Customer Satisfaction",
      name: "Michael Brown",
      volunteerLocation: "Cloth Donation",
      description: "Spread warmth and hope: donate clothes to those in need and make a positive impact in someone's life",
    },
    {
      imgSrc: "assets\\images\\Key features\\hospital.png",
      altText: "Pharma Pipeline",
      name: "Sarah Davis",
      volunteerLocation: "Food Donation",
      description: "Join our community of volunteers and be a part of the change you want to see in the world.",
    },
  ];

  return (
    <div className="bg-red-200 px-20 py-8 text-center">
      <h2 className="text-2xl font-bold text-red-800 mb-4">OUR VOLUNTEERS</h2>
      <p className="text-lg text-red-800 mb-8">
        You can make a difference by supporting us and for being an
        <strong> UMEED!!</strong>
        <br />
        Your donation can help to change lives.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyFeaturesData.map((feature, index) => (
          <Box key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default AboutFeatures;
