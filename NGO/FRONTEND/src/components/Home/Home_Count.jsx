import React from 'react';
import CountUp from 'react-countup';

const Home_Count = () => {
    return (
        <div className="flex justify-center space-x-32 py-10">
            <div className="text-center">
                <p className="text-4xl font-bold text-[#FF6A3D]">   
                    <CountUp end={33000} duration={5} suffix="+" />
                </p>
                <p className="text-xl text-gray-700">Volunteers Engaged this Year</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-bold text-[#FF6A3D]">
                    <CountUp end={14} duration={5} suffix="+" />
                </p>
                <p className="text-xl text-gray-700">Years of Voluntary Service</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-bold text-[#FF6A3D]">
                    <CountUp end={250000} duration={5} suffix="+" />
                </p>
                <p className="text-xl text-gray-700">Volunteering Hours this Year</p>
            </div>
        </div>
    );
};

export default Home_Count;