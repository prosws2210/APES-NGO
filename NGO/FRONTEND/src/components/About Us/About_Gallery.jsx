import React from 'react';
import 'tailwindcss/tailwind.css';

const About_Gallery = () => {
  const images = [
    "/assets/images/pictures/image_1.jpg",
    "/assets/images/pictures/image_2.jpg",
    "/assets/images/pictures/image_3.jpg",
    "/assets/images/pictures/image_4.jpg",
    "/assets/images/pictures/image_5.jpg",
    "/assets/images/pictures/image_6.jpg",
    "/assets/images/pictures/image_7.jpg",
    "/assets/images/pictures/image_8.jpg",
    "/assets/images/pictures/image_9.jpg",
    // "/assets/images/pictures/image_10.jpg",
    "/assets/images/pictures/image_11.jpg",
    // "/assets/images/pictures/image_12.jpg",  
    "/assets/images/pictures/image_13.jpg",  
    "/assets/images/pictures/image_14.jpg",  
    // "/assets/images/pictures/image_15.jpg",  
    // "/assets/images/pictures/image_16.jpg",  
    "/assets/images/pictures/image_17.jpg",  
    "/assets/images/pictures/image_18.jpg",  
  ];

  return (
    <div className='bg-violet-50 py-4 px-20'>
      <div className='text-center pt-8'>
        <h2 className="text-2xl font-bold">OUR PHOTO GALLERY</h2>
      </div>
      <div className="max-w-7xl py-6 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto grid-flow-dense">
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
