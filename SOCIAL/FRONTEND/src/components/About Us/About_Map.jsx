import React from 'react'
import backgroundImage from '/assets/images/gallery/about.jpg'; // replace with the relative path to your image

const About_Map = () => {
    return (
        <div className="bg-cover justify-center items-center text-white text-2xl h-screen px-20 py-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='flex flex-col items-center h-full justify-evenly'>
                <div className="bg-gray-700 flex text-white text-sm opacity-70 w-full p-4 h-1/4 overflow-auto rounded-2xl m-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="bg-gray-700 flex text-white text-sm opacity-70 w-full p-4 h-1/4 overflow-auto rounded-2xl m-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="bg-gray-700 flex text-white text-sm opacity-70 w-full p-4 h-1/4 overflow-auto rounded-2xl m-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="bg-gray-700 flex text-white text-sm opacity-70 w-full p-4 h-1/4 overflow-auto rounded-2xl m-4">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    )
}

export default About_Map
