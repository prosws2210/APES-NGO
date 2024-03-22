import React from 'react';
import 'tailwindcss/tailwind.css';

const About_Gallery = () => {
  const images = [
    "/assets/images/food/food1.jpeg",
    "/assets/images/food/food2.jpeg",
    "/assets/images/food/food3.jpeg",
    "/assets/images/food/food4.jpg",
    "/assets/images/food/food5.jpeg",
    "/assets/images/food/food6.png",
    "/assets/images/food/food7.jpg",
    "/assets/images/food/food9.jpg",
    "/assets/images/food/food10.jpeg",
    "/assets/images/food/food11.jpeg",
    "/assets/images/food/food12.jpg",   
  ];

  return (
    <div className='bg-violet-50 py-4 px-20'>
      <div className='text-center pt-8'>
        <h2 className="text-2xl font-bold">OUR PHOTO GALLERY</h2>
      </div>
      <div className="max-w-8xl py-6 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto grid-flow-dense">
        {images.map((image, index) => ( 
          <div key={index} className={index % 2 === 0 ? "row-span-2" : index % 3 === 0 ? "col-span-2" : ""}>
            <img 
              src={image} 
              alt="" 
              className="w-full h-full object-cover border-8 border-white shadow-xl" 
              loading="lazy" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About_Gallery;
