import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
        image: 'assets/images/slider/slider_11.jpg',
        title: 'Welcome to Umeed',
    },
    {
        image: 'assets/images/slider/slider_22.jpg',
        title: 'Discover Our Impact',
    },
    {
        image: 'assets/images/slider/slider_33.jpg',
        title: 'Explore Our Social Initiatives',
    },
  ];

  const handleMouseEnter = () => {
    clearInterval(swiperRef.current.autoplay.running);
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className='bg-violet-50'>
      <div>
        <div className="max-w-2xl mx-auto pt-12 px-6 text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Welcome to Umeed</h1>
          <p className="text-lg text-gray-600 mb-6">
            Join us in our mission to provide quality healthcare to those in need.
          </p>
        </div>
      </div>
  
      <div className="bg-violet-50 px-12 pb-8">
        <div className='bg-white flex rounded-2xl'>
          <div className="w-3/5 border-4 border-black rounded-2xl m-4">
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="overflow-hidden">
                <Swiper
                  ref={swiperRef}
                  slidesPerView={1}
                  spaceBetween={15}
                  pagination={{
                    clickable: true,
                  }}
                  onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="carousel-item relative">
                        <img className="w-full h-[450px] object-cover rounded-2xl" src={slide.image} alt={`Slide ${index + 1}`} loading='lazy' />
                        <div className="absolute flex flex-col items-center justify-center inset-0 bg-opacity-30 bg-black text-white px-20 pt-64">
                          <div className="relative z-10 max-w-[80%] text-center">
                            <h4 className="text-4xl font-bold mb-4">{slide.title}</h4>
                            
                            <Link to="/donation">
                              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Join Us and Donate 🤍
                              </button>
                            </Link>

                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
  
          <div className="w-2/5">
            <div className='py-9'>
              Hello
            </div>
          </div>

        </div>
      </div>
    </div>
  );
  
};

export default HomeSlider;