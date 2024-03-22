import React from 'react';
import 'tailwindcss/tailwind.css';

const About_Gallery = () => {
  const images = [
"/assets/images/education images/image_1.jpg",
"/assets/images/education images/image_2.jpg",
"/assets/images/education images/image_3.jpg",
"/assets/images/education images/image_4.jpg",
"/assets/images/education images/image_5.jpg",
"/assets/images/education images/image_6.jpg",
"/assets/images/education images/image_7.jpg",
"/assets/images/education images/image_8.jpg",
"/assets/images/education images/image_9.jpg",
"/assets/images/education images/image_10.jpg",
"/assets/images/education images/image_11.jpg",
"/assets/images/education images/image_12.jpg", 
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
