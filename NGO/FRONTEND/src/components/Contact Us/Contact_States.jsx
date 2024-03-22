import React, { useState } from 'react';

const Box = ({ imgSrc, altText, state, capital, description }) => {
    return (
        <div className="bg-white p-8 shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-500 ease-in-out">
            <div className="text-center">
                <div className="bg-black rounded-lg p-1 w-fit mx-auto">
                    <img className="w-40 h-40 mx-auto hover:scale-125 transition-transform duration-500 ease-in-out shadow-lg hover:shadow-2xl" src={imgSrc} alt={altText} />
                </div>
                <h5 className="font-bold text-lg pt-4 pb-4">{state}</h5>
                <p className="text-[13px]">{capital}</p>
                <p className="text-[13px]">{description}</p>
            </div>
        </div>
    );
};
const Contact_States = () => {
  const [showAll, setShowAll] = useState(false);
  const statesData = [
    { state: 'Andhra Pradesh', capital: 'Amaravati' },
    { state: 'Arunachal Pradesh', capital: 'Itanagar' },
    { state: 'Assam', capital: 'Dispur' },
    { state: 'Bihar', capital: 'Patna' },
    { state: 'Chhattisgarh', capital: 'Raipur' },
    { state: 'Goa', capital: 'Panaji' },
    { state: 'Gujarat', capital: 'Gandhinagar' },
    { state: 'Haryana', capital: 'Chandigarh' },
    { state: 'Himachal Pradesh', capital: 'Shimla' },
    { state: 'Jharkhand', capital: 'Ranchi' },
    { state: 'Karnataka', capital: 'Bengaluru' },
    { state: 'Kerala', capital: 'Thiruvananthapuram' },
    { state: 'Madhya Pradesh', capital: 'Bhopal' },
    { state: 'Maharashtra', capital: 'Mumbai' },
    { state: 'Manipur', capital: 'Imphal' },
    { state: 'Meghalaya', capital: 'Shillong' },
    { state: 'Mizoram', capital: 'Aizawl' },
    { state: 'Nagaland', capital: 'Kohima' },
    { state: 'Odisha', capital: 'Bhubaneswar' },
    { state: 'Punjab', capital: 'Chandigarh' },
    { state: 'Rajasthan', capital: 'Jaipur' },
    { state: 'Sikkim', capital: 'Gangtok' },
    { state: 'Tamil Nadu', capital: 'Chennai' },
    { state: 'Telangana', capital: 'Hyderabad' },
    { state: 'Tripura', capital: 'Agartala' },
    { state: 'Uttar Pradesh', capital: 'Lucknow' },
    { state: 'Uttarakhand', capital: 'Dehradun' },
    { state: 'West Bengal', capital: 'Kolkata' },
  ];
  

  const displayedData = showAll ? statesData : statesData.slice(0, 5);

  return (
    <div className='bg-violet-50 py-4 px-10'>
      <div className='text-center p-4'>
        <h2 className='text-2xl font-bold pb-2'>NGO's collaborated with us</h2>
        <p className='text-gray-600'> Please find the nearest NGO to help the needy </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-6 px-4 md:px-20 justify-evenly">
        {displayedData.map((state, index) => (
          <Box key={index} {...state} />
        ))}
      </div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded-2xl" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default Contact_States;
