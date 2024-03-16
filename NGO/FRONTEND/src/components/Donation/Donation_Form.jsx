import React from 'react';
import { FaCheckCircle, FaPlus, FaEquals } from 'react-icons/fa';

const DonationForm = () => {
  return (
    <div className="bg-violet-50 px-20 pt-8 pb-12 flex items-center justify-center">
      <div className="max-w-7xl p-6 bg-white shadow-md rounded-lg"> 

        <div className="grid grid-cols-3 gap-4 mb-6 text-center py-2 text-lg"> 
          <div className="border-b-4 border-blue-500 hover:font-bold"> 
            STEP 1
            <br />
            Choose donation amount
          </div>
          <div className="hover:font-bold">
            STEP 2
            <br />
            Select Payment Method
          </div>
          <div className="hover:font-bold">
            STEP 3
            <br />
            Donation Submitted
          </div>
        </div>

        <div className="mb-4 grid grid-cols-4 gap-4">
          {['₹4500.00', '₹9000.00', '₹13500.00', '₹18000.00', '₹24000.00', '₹30000.00', '₹37500.00', '₹45000.00', '₹60000.00', '₹75000.00', '₹90000.00', '₹105000.00'].map((amount, index) => (
            <button key={index} className="bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg py-2"> 
              {amount}
            </button>
          ))}
          <div className="flex justify-between items-center mt-4">
            <input className="flex-grow mr-4 rounded-lg border border-gray-300 p-2" placeholder="Other Amount" /> 
            <div className="text-green-500 flex items-center">
              <FaCheckCircle className="w-6 h-6" /> ₹4500 feeds 3 children/year.
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <div className="mb-2 text-lg font-bold">Select your citizenship</div>
            <div className="flex items-center mb-4 space-x-12">
              <div>
                <input className="mr-2" id="indian-citizen" name="citizenship" type="radio" />
                <label htmlFor="indian-citizen">
                  Indian Citizen
                </label>
              </div>
              <div>
                <input className="mr-2" id="foreign-citizen" name="citizenship" type="radio" />
                <label htmlFor="foreign-citizen">Foreign Citizen</label>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-2 text-lg font-bold">Personal Details</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border border-gray-300 p-2 rounded" placeholder="Full Name*" />
              <input className="border border-gray-300 p-2 rounded" placeholder="Email ID*" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border border-gray-300 p-2 rounded" placeholder="Birthdate" />
              <input className="border border-gray-300 p-2 rounded" placeholder="Mobile*" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border border-gray-300 p-2 rounded" placeholder="PAN Number*" />
              <input className="border border-gray-300 p-2 rounded" placeholder="Address*" />
            </div>
            <div className="text-sm mb-4">To get the 80-G certificate, please enter your PAN number</div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <input className="border border-gray-300 p-2 rounded" placeholder="Pin Code*" />
              <input className="border border-gray-300 p-2 rounded" placeholder="State*" />
              <select className="border border-gray-300 p-2 rounded">
                <option value="">Select your Preference State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-lg font-bold">Captcha</div>
            <div className="flex items-center mb-4 space-x-2">
              <div className="mr-2">3</div>
              <FaPlus className="w-4 h-4 mx-2" />
              <div className="mr-2">6</div>
              <FaEquals className="w-4 h-4 mx-2" />
              <input className="w-20 border border-gray-300 p-2 rounded" />
            </div>
          </div>
          <div className="mb-8">
            <input id="privacy-policy" type="checkbox" />
            <label className="text-sm ml-2" htmlFor="privacy-policy">
              I have read through the website's Privacy Policy & Terms and Conditions to make a donation.
            </label>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-2xl font-bold hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg">Make a difference in someone’s life by donating to the charity</button>
        </div>

      </div>
    </div>

  );
};

export default DonationForm;