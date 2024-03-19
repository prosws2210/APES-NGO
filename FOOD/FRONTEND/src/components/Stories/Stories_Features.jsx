import React, { useState } from 'react';
import { FaHeart, FaBook, FaPaw } from 'react-icons/fa';

const StoriesFeatures = () => {
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const stories = [
    {
      icon: <FaHeart className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'Beach cleaning is the altruistic act of helping to clean up beaches, involving giving time and energy without expecting anything in return.',
      author: 'Rajesh Khanna'
    },
    {
      icon: <FaBook className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'A book donation drive involves altruistically giving books to those in need, without expecting any form of compensation in return.',
      author: 'Rajesh Khanna'
    },
    {
      icon: <FaPaw className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'Volunteering at animal shelters is a selfless way to provide care and attention to animals in need, without any expectation of reward.',
      author: 'Rajesh Khanna'
    },
    {
      icon: <FaHeart className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'Beach cleaning is the altruistic act of helping to clean up beaches, involving giving time and energy without expecting anything in return.',
      author: 'Rajesh Khanna'
    },
    {
      icon: <FaBook className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'A book donation drive involves altruistically giving books to those in need, without expecting any form of compensation in return.',
      author: 'Rajesh Khanna'
    },
    {
      icon: <FaPaw className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'Volunteering at animal shelters is a selfless way to provide care and attention to animals in need, without any expectation of reward.',
      author: 'Rajesh Khanna'
    },
    {
      icon: <FaHeart className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'Beach cleaning is the altruistic act of helping to clean up beaches, involving giving time and energy without expecting anything in return.',
      author: 'Rajesh Khanna'
    },
    {
      icon: <FaBook className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'A book donation drive involves altruistically giving books to those in need, without expecting any form of compensation in return.',
      author: 'Rajesh Khanna'
    },
    {
      icon: <FaPaw className="mr-2" />,
      title: 'ACCOMPLISHED TALES',
      description: 'Volunteering at animal shelters is a selfless way to provide care and attention to animals in need, without any expectation of reward.',
      author: 'Rajesh Khanna'
    },
    // Add more stories here
  ];

  const handleShowMore = () => {
    setDisplayCount(stories.length); // Show all stories
  };

  const handleShowLess = () => {
    setDisplayCount(initialDisplayCount); // Show default number of stories
  };

  return (
    <div className="bg-violet-50 mx-auto px-20 py-8">
      <h2 className="text-2xl font-semibold mb-6">Read Stories</h2>
      <div className="grid grid-cols-3 gap-4">
        {stories.slice(0, displayCount).map((story, index) => (
          <div key={index} className="bg-[#FDE8E9] rounded-3xl shadow-2xl p-4">
            <div className="flex items-center mb-4">
              {story.icon}
              <span className="font-semibold">{story.title}</span>
            </div>
            <p className="italic text-lg mb-4">
              {story.description}
            </p>
            <hr className="border-t-2 border-[#D1D5DB] my-4" />
            <p className="font-semibold">{story.author}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {displayCount === initialDisplayCount ? (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleShowMore}>Show More</button>
        ) : (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleShowLess}>Show Less</button>
        )}
      </div>
    </div>
  );
}

export default StoriesFeatures;
