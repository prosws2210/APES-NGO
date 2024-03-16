import React from 'react';

const Box = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="bg-white p-8 shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="text-center">
        <div className="bg-black rounded-lg p-1 w-fit mx-auto">
          <img className="w-40 h-40 mx-auto hover:scale-125 transition-transform duration-500 ease-in-out shadow-lg hover:shadow-2xl" src={imgSrc} alt={altText} />
        </div>
        <h5 className="font-bold text-lg pt-4 pb-4">{title}</h5>
        <p className="text-[13px]">{description}</p>
      </div>
    </div>
  );
};

const Home_Components = () => {
  const keyFeaturesData = [
    {
      imgSrc: "assets\\images\\Key features\\healthcare.jpg",
      altText: "Health Care Icon",
      title: "HEALTHCARE",
      description: "Innovative tech for effective treatments, leading medical breakthroughs, and improved patient outcomes."
    },
    {
      imgSrc: "assets\\images\\Key features\\education.webp",
      altText: "Education Icon",
      title: "EDUCATION",
      description: "Experienced doctors offer high-standard care, empowering patients with knowledge for informed healthcare decisions."
    },
    {
      imgSrc: "assets\\images\\Key features\\food.png",
      altText: "Food Icon",
      title: "FOOD",
      description: "Personalized treatment plans ensure high patient satisfaction, exceeding expectations for positive health outcomes."
    },
    {
      imgSrc: "assets\\images\\Key features\\social.jpg",
      altText: "Social Cause Icon",
      title: "SOCIAL CAUSE",
      description: "Diverse pharma pipeline aims to transform patient lives through innovative treatments and scientific advancements."
    },
    {
      imgSrc: "assets\\images\\Key features\\event.jpg",
      altText: "Events Icon",
      title: "EVENTS",
      description: "Multidisciplinary pharma team dedicated to delivering safe and effective healthcare solutions for patient benefit."
    },
];

  return (
    <div className='bg-violet-50 py-10 px-10'>
      <div className='text-center p-4'>
        <h2 className='text-2xl font-bold pb-2'>Our Current Categories</h2>
        <p className='text-gray-600'>Take a look at assistance we offer </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-6 px-4 md:px-20 justify-evenly">
        {keyFeaturesData.map((feature, index) => (
          <Box key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Home_Components;
