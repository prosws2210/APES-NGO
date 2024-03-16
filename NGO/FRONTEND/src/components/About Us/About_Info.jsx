import React from 'react';
import { FaHeart, FaEquals, FaGraduationCap, FaRegChartBar, FaBalanceScale, FaHandshake } from 'react-icons/fa';
import { BiBarChart } from 'react-icons/bi';

const AboutInfo = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-center text-2xl font-bold uppercase mt-8 mb-10">
        Towards Achieving Sustainable Development Goals
      </h2>
      <div className="flex justify-center space-x-4 px-16">
        <div className="flex flex-col items-center justify-between p-4 bg-[#e1bee7] rounded-lg shadow-lg h-[170px] w-[250px]">
          <FaHeart className="text-[#8e24aa] text-6xl mb-4" />
          <p className="text-sm font-semibold">Good Health & Well Being</p>
          <p className="text-2xl">#3</p>
        </div>
        <div className="flex flex-col items-center justify-between p-4 bg-[#f8bbd0] rounded-lg shadow-lg h-[170px] w-[250px]">
          <FaEquals className="text-[#d81b60] text-6xl mb-4" />
          <p className="text-sm font-semibold">Gender Equality</p>
          <p className="text-2xl">#5</p>
        </div>
        <div className="flex flex-col items-center justify-between p-4 bg-[#fff176] rounded-lg shadow-lg h-[170px] w-[250px]">
          <FaGraduationCap className="text-[#fdd835] text-6xl mb-4" />
          <p className="text-sm font-semibold">Quality Education</p>
          <p className="text-2xl">#4</p>
        </div>
        <div className="flex flex-col items-center justify-between p-4 bg-[#aed581] rounded-lg shadow-lg h-[170px] w-[250px]">
          <FaRegChartBar className="text-[#7cb342] text-6xl mb-4" />
          <p className="text-sm font-semibold">Economic Growth</p>
          <p className="text-2xl">#8</p>
        </div>
        <div className="flex flex-col items-center justify-between p-4 bg-[#bbdefb] rounded-lg shadow-lg h-[170px] w-[250px]">
          <FaBalanceScale className="text-[#1e88e5] text-6xl mb-4" />
          <p className="text-sm font-semibold">Reduced Inequalities</p>
          <p className="text-2xl">#10</p>
        </div>
        <div className="flex flex-col items-center justify-between p-4 bg-[#c8e6c9] rounded-lg shadow-lg h-[170px] w-[250px]">
          <FaHandshake className="text-[#43a047] text-6xl mb-4" />
          <p className="text-sm font-semibold">Partnerships for the Goals</p>
          <p className="text-2xl">#17</p>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
