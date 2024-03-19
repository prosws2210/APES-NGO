import React from 'react'
import backgroundImage from '/assets/images/gallery/about.jpg'; // replace with the relative path to your image

const About_Map = () => {
    return (
        <div className="bg-cover bg-center h-screen flex text-white text-2xl" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className='flex h-screen w-screen'>
                <div className="bg-black text-white text-sm opacity-70 w-64 h-64 p-4 overflow-auto rounded-2xl mt-72 ml-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="bg-black text-white text-sm opacity-0 w-64 h-64 p-4 overflow-auto rounded-2xl mt-52 ml-36">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="bg-black text-white text-sm opacity-70 w-52 h-64 p-4 overflow-auto rounded-2xl mt-52 ml-16">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="bg-black text-white text-sm opacity-70 w-64 h-64 p-4 overflow-auto rounded-2xl mt-80 ml-12">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>

        </div>
    )
}

export default About_Map