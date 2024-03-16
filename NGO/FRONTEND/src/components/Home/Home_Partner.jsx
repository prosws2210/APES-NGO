import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const partners = [
  { icon: FaFacebook, alt: 'IM GEARS logo', name: 'IM GEARS' },
  { icon: FaFacebook, alt: 'NTT Data logo', name: 'NTT Data' },
  { icon: FaFacebook, alt: 'Qualcomm logo', name: 'Qualcomm' },
];

const Home_Partner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">OUR PARTNERS</h2>
        <div className="flex space-x-24">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div className="flex flex-col items-center" key={index}>
                <Icon className="text-2xl mb-2" />
                <span className="text-sm font-medium">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home_Partner;
