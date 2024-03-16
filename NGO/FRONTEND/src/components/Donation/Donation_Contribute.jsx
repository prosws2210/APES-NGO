import React from 'react';
import { FaArrowLeft, FaArrowRight, FaTimesCircle, FaHandshake, FaBirthdayCake, FaDesktop, FaSnowflake, FaHandsHelping } from 'react-icons/fa';

const DonationContribute = () => {
  return (
    <div className="bg-white py-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold uppercase">Impact Created by Your Valuable Contributions</h2>
        <p className="mt-2 text-lg">Here is What Umeed has Managed with Your Help:</p>
      </div>
      <div className="mt-16 flex justify-between items-center px-12">
        <FaArrowLeft className="text-blue-500 h-6 w-6" />
        <div className="flex space-x-16">
          <div className="text-center">
            <FaTimesCircle className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <p className="text-3xl font-bold">4,33,933</p>
            <p className="text-lg">Corrective Surgeries</p>
          </div>
          <div className="text-center">
            <FaHandshake className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <p className="text-3xl font-bold">3,039</p>
            <p className="text-lg">Vocational Trainings</p>
          </div>
          <div className="text-center">
            <FaBirthdayCake className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <p className="text-3xl font-bold">2,252</p>
            <p className="text-lg">Mass Marriages</p>
          </div>
          <div className="text-center">
            <FaDesktop className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <p className="text-3xl font-bold">5,220</p>
            <p className="text-lg">Sewing Machines</p>
          </div>
          <div className="text-center">
            <FaSnowflake className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <p className="text-3xl font-bold">2,25,747</p>
            <p className="text-lg">Sweaters</p>
          </div>
          <div className="text-center">
            <FaHandsHelping className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <p className="text-3xl font-bold">3,72,577</p>
            <p className="text-lg">Callipers</p>
          </div>
        </div>
        <FaArrowRight className="text-blue-500 h-6 w-6" />
      </div>
    </div>
  );
}

export default DonationContribute;
