import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid' // or the library you're using

const partners = [
    { src: "/placeholder.svg", alt: "IM GEARS logo", name: "IM GEARS" },
    { src: "/placeholder.svg", alt: "NTT Data logo", name: "NTT Data" },
    { src: "/placeholder.svg", alt: "Qualcomm logo", name: "Qualcomm" }
];

const Home_Partner = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-center text-3xl font-bold mb-8">OUR PARTNERS</h2>
            <div className="flex justify-between items-center">
                <ChevronLeftIcon className="text-gray-400 w-6 h-6" />
                <div className="flex space-x-12">
                {partners.map((partner, index) => (
                    <div className="flex flex-col items-center" key={index}>
                    <img
                        alt={partner.alt}
                        className="mb-2"
                        height="100"
                        src={partner.src}
                        style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        }}
                        width="100"
                    />
                    <span className="text-sm font-medium">{partner.name}</span>
                    </div>
                ))}
                </div>
                <ChevronRightIcon className="text-gray-400 w-6 h-6" />
            </div>
        </div>
    </div>
  )
}

export default Home_Partner