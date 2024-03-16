import React from 'react'
import { Rating } from "@mui/material";



const Contact_Feedback = () => {
    const handleRatingChange = (idx, rating) => {
        setRatingList((prevRatingList) => {
            const updatedRatingList = [...prevRatingList];
            updatedRatingList[idx] = rating;
            return updatedRatingList;
        });
        // console.log(ratingList);
    };

    return (
        <div className="contact-row px-20 bg-violet-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {/* Suggestion Form with Rating */}
                <div className="p-6">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold mb-8">Suggestion Form</h2>
                        
                        <div className="flex items-center space-x-4">
                            <p className="text-gray-800 text-md font-semibold">Rate our service:</p>
                            {/* Rating Stars */}
                            <div className="flex justify-center items-center mb-2">
                                <Rating
                                    name="half-rating"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    onChange={(event, newValue) =>
                                        handleRatingChange(idx, newValue)
                                    }
                                />
                            </div>
                        </div>

                        {/* Additional Suggestions */}
                        <div className="mb-6">
                            <label htmlFor="suggestion" className="block text-sm font-semibold text-gray-600 mb-2">
                            Additional Suggestions:
                            </label>
                            <div className="relative rounded-md shadow-sm">
                            <textarea
                                rows="5"
                                id="suggestion"
                                placeholder="Type your suggestions here..."
                                className="form-input py-4 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                            >
                            </textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl">Submit Suggestion</button>
                    </div>
                </div>

                </div>
            </div>
        </div>

    )
}

export default Contact_Feedback