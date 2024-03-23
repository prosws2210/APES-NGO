import React, { useState } from 'react';

const Box = ({ imgSrc, altText, state, capital, description }) => {
    return (
        <div className="bg-white p-8 shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-500 ease-in-out">
            <div className="text-center">
                <div className="bg-black rounded-lg p-1 w-fit mx-auto">
                    <img className="w-40 h-40 mx-auto hover:scale-125 transition-transform duration-500 ease-in-out shadow-lg hover:shadow-2xl" src={imgSrc} alt={altText} />
                </div>
                <h5 className="font-bold text-lg pt-4 pb-2">{state}</h5>
                <p className="text-[13px]">{capital}</p>
            </div>
        </div>
    );
};

const Contact_States = () => {
  const [showAll, setShowAll] = useState(false);
  const statesData = [
    { state: 'Andhra Pradesh', capital: 'Amaravati', imgSrc: 'assets/images/states/andhra.gif', altText: 'Andhra Pradesh gif' },
    { state: 'Arunachal Pradesh', capital: 'Itanagar', imgSrc: 'assets/images/states/arunachal.gif', altText: 'Arunachal Pradesh gif' },
    { state: 'Assam', capital: 'Dispur', imgSrc: 'assets/images/states/assam.gif', altText: 'Assam gif' },
    { state: 'Bihar', capital: 'Patna', imgSrc: 'assets/images/states/bihar.gif', altText: 'Bihar gif' },
    { state: 'Chhattisgarh', capital: 'Raipur', imgSrc: 'assets/images/states/chhattisgarh.gif', altText: 'Chhattisgarh gif' },
    { state: 'Goa', capital: 'Panaji', imgSrc: 'assets/images/states/goa.gif', altText: 'Goa gif' },
    { state: 'Gujarat', capital: 'Gandhinagar', imgSrc: 'assets/images/states/gujarat.gif', altText: 'Gujarat gif' },
    { state: 'Haryana', capital: 'Chandigarh', imgSrc: 'assets/images/states/haryana.gif', altText: 'Haryana gif' },
    { state: 'Himachal Pradesh', capital: 'Shimla', imgSrc: 'assets/images/states/himachal.gif', altText: 'Himachal Pradesh gif' },
    { state: 'Jharkhand', capital: 'Ranchi', imgSrc: 'assets/images/states/jharkhand.gif', altText: 'Jharkhand gif' },
    { state: 'Karnataka', capital: 'Bengaluru', imgSrc: 'assets/images/states/karnataka.gif', altText: 'Karnataka gif' },
    { state: 'Kerala', capital: 'Thiruvananthapuram', imgSrc: 'assets/images/states/kerala.gif', altText: 'Kerala gif' },
    { state: 'Madhya Pradesh', capital: 'Bhopal', imgSrc: 'assets/images/states/madhya.gif', altText: 'Madhya Pradesh gif' },
    { state: 'Maharashtra', capital: 'Mumbai', imgSrc: 'assets/images/states/maharashtra.gif', altText: 'Maharashtra gif' },
    { state: 'Manipur', capital: 'Imphal', imgSrc: 'assets/images/states/manipur.gif', altText: 'Manipur gif' },
    { state: 'Meghalaya', capital: 'Shillong', imgSrc: 'assets/images/states/meghalaya.gif', altText: 'Meghalaya gif' },
    { state: 'Mizoram', capital: 'Aizawl', imgSrc: 'assets/images/states/mizoram.gif', altText: 'Mizoram gif' },
    { state: 'Nagaland', capital: 'Kohima', imgSrc: 'assets/images/states/nagaland.gif', altText: 'Nagaland gif' },
    { state: 'Odisha', capital: 'Bhubaneswar', imgSrc: 'assets/images/states/odisha.gif', altText: 'Odisha gif' },
    { state: 'Punjab', capital: 'Chandigarh', imgSrc: 'assets/images/states/penjab.gif', altText: 'Punjab gif' },
    { state: 'Rajasthan', capital: 'Jaipur', imgSrc: 'assets/images/states/rajasthan.gif', altText: 'Rajasthan gif' },
    { state: 'Sikkim', capital: 'Gangtok', imgSrc: 'assets/images/states/sikkim.gif', altText: 'Sikkim gif' },
    { state: 'Tamil Nadu', capital: 'Chennai', imgSrc: 'assets/images/states/tamil.gif', altText: 'Tamil Nadu gif' },
    { state: 'Telangana', capital: 'Hyderabad', imgSrc: 'assets/images/states/telangana.gif', altText: 'Telangana gif' },
    { state: 'Tripura', capital: 'Agartala', imgSrc: 'assets/images/states/tripura.gif', altText: 'Tripura gif' },
    { state: 'Uttar Pradesh', capital: 'Lucknow', imgSrc: 'assets/images/states/uttar.gif', altText: 'Uttar Pradesh gif' },
    { state: 'Uttarakhand', capital: 'Dehradun', imgSrc: 'assets/images/states/uttarakhand.gif', altText: 'Uttarakhand gif' },
    // { state: 'West Bengal', capital: 'Kolkata', imgSrc: 'assets/images/states/west.gif', altText: 'West Bengal gif' },

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
