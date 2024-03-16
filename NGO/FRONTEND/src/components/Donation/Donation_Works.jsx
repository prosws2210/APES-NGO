import React from 'react';

const DonationWorks = () => {
  return (
    <div className="bg-violet-50 px-32 py-8">
      <h2 className="text-2xl font-bold text-center">CHANGING LIVES</h2>
      <p className="mt-2 text-center text-lg text-gray-600">Let Us Extend a Helping Hand to Those in Need</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Food for Patient"
            className="w-full h-48 object-cover"
            src="assets/images/slider/slider_11.jpg" // Replace with actual image URL
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Food for Patient</h3>
            <p className="mt-2 text-sm text-gray-500">3,94,69,253 Children Feed</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Narayan Roti Packet"
            className="w-full h-48 object-cover"
            src="assets/images/slider/slider_11.jpg" // Replace with actual image URL
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Narayan Roti Packet</h3>
            <p className="mt-2 text-sm text-gray-500">18,70,523 Happiness Kits Provided</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Narayan Artificial Limb"
            className="w-full h-48 object-cover"
            src="assets/images/slider/slider_11.jpg" // Replace with actual image URL
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Narayan Artificial Limb</h3>
            <p className="mt-2 text-sm text-gray-500">34,465 Narayan Artificial Limbs Distributed</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Operation/Surgery"
            className="w-full h-48 object-cover"
            src="assets/images/slider/slider_11.jpg" // Replace with actual image URL
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Operation/Surgery</h3>
            <p className="mt-2 text-sm text-gray-500">4,39,963 Surgeries Accomplished</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationWorks;
