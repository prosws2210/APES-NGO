import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaPlus, FaEquals, FaCreditCard, FaMoneyBill, FaFileAlt, FaFileUpload, FaTrello, FaWallet } from 'react-icons/fa';


const DonationForm = () => {
  const [step, setStep] = React.useState(1);
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }, []);


  return (
    <div className="bg-violet-50 px-20 pt-8 pb-12 flex items-center justify-center">
      <div className="max-w-7xl p-6 bg-white shadow-md rounded-lg">

        <div className="grid grid-cols-3 gap-4 mb-6 text-center py-2 text-lg">
          <div className={`border-b-4 ${step === 1 ? 'border-blue-500' : ''} hover:font-bold cursor-pointer flex items-center justify-center`} style={{ minHeight: '100px' }} onClick={() => setStep(1)}>
            STEP 1
            <br />
            Choose donation amount
          </div>
          <div className={`border-b-4 ${step === 2 ? 'border-blue-500' : ''} hover:font-bold cursor-pointer flex items-center justify-center`} style={{ minHeight: '100px' }} onClick={() => setStep(2)}>
            STEP 2
            <br />
            Select Payment Method
          </div>
          <div className={`border-b-4 ${step === 3 ? 'border-blue-500' : ''} hover:font-bold cursor-pointer flex items-center justify-center`} style={{ minHeight: '100px' }} onClick={() => setStep(3)}>
            STEP 3
            <br />
            Donation Submitted
          </div>
        </div>

        <div style={{ minHeight: '400px' }}> {/* Set a fixed height for the content area */}
          {/* STEP 1 */}
          {step === 1 && (
            <div>
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
                  {/* <div className="text-sm mb-4">To get the 80-G certificate, please enter your PAN number</div> */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <input className="border border-gray-300 p-2 rounded" placeholder="Pin Code*" />
                    <input className="border border-gray-300 p-2 rounded" placeholder="State*" />
                    <select className="border border-gray-300 p-2 rounded">
                      <option value="">Select your Preference State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Delhi">Delhi (National Capital Territory of Delhi)</option>
                      <option value="Puducherry">Puducherry (Pondicherry)</option>
                      <option value="Ladakh">Ladakh</option>
                  </select>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="mb-2 text-lg font-bold">Captcha</div>
                  <div className="flex items-center mb-4 space-x-2">
                    <div className='font-bold font-6xl'>{num1}</div>                    
                    <FaPlus className="w-4 h-4 mx-2" />
                    <div className="mr-2 font-bold font-6xl">{num2}</div>
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
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <div className="mx-auto max-w-6xl bg-white p-6">
                <div className="flex justify-between border-b pb-4">
                  <h1 className="text-xl font-semibold">SELECT PAYMENT METHOD</h1>
                  <span>Transaction ID : 1157534</span>
                </div>
                <div className="mt-4 mb-8">
                  <span className="font-medium">Amount : Rs 4500.00</span>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col w-1/4">
                    <input type="radio" id="credit-card" name="payment-method" className="hidden" />
                    <label htmlFor="credit-card" className="mb-4 flex items-center justify-between bg-[#e6f7ff] text-[#1890ff] p-4 rounded-md cursor-pointer">
                      <FaCreditCard className="text-[#1890ff]" />
                      <span>CREDIT CARD</span>
                    </label>
                    <input type="radio" id="debit-card" name="payment-method" className="hidden" />
                    <label htmlFor="debit-card" className="mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer">
                      <FaMoneyBill />
                      <span>DEBIT CARD</span>
                    </label>
                    <input type="radio" id="net-banking" name="payment-method" className="hidden" />
                    <label htmlFor="net-banking" className="mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer">
                      <FaFileAlt />
                      <span>NET BANKING</span>
                    </label>
                    <input type="radio" id="upi" name="payment-method" className="hidden" />
                    <label htmlFor="upi" className="mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer">
                      <FaFileUpload />
                      <span>UPI</span>
                    </label>
                    <input type="radio" id="tez" name="payment-method" className="hidden" />
                    <label htmlFor="tez" className="mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer">
                      <FaTrello />
                      <span>TEZ</span>
                    </label>
                    <input type="radio" id="wallet" name="payment-method" className="hidden" />
                    <label htmlFor="wallet" className="flex items-center justify-between p-4 rounded-md cursor-pointer">
                      <FaWallet />
                      <span>WALLET</span>
                    </label>
                  </div>
                  <div className="flex-1">
                    <div className="border-b pb-2 mb-4">
                      <h2 className="text-lg font-semibold">CREDIT CARD INFO</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="mb-1" htmlFor="card-type">
                          Card Type
                        </label>
                        <select id="card-type" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                          <option value="">-- Select Card Type --</option>
                          <option value="visa">Visa</option>
                          <option value="mastercard">MasterCard</option>
                          <option value="amex">American Express</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-1" htmlFor="card-number">
                          Card Number
                        </label>
                        <input id="card-number" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Card Number" />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <label className="mb-1" htmlFor="name-on-card">
                          Name On Card
                        </label>
                        <input id="name-on-card" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Name On Card" />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-1">Card Expiry Date</label>
                        <div className="flex gap-2">
                          <select id="expiry-month" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Month</option>
                            <option value="01">January</option>
                          </select>
                          <select id="expiry-year" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Year</option>
                            <option value="2023">2023</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-1" htmlFor="cvv">
                          CVV Number
                        </label>
                        <input id="cvv" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="CVV Number" />
                        <a className="text-xs text-blue-600" href="#">
                          What is CVV number?
                        </a>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs italic">
                          Note: In the next step you will be redirected to your bank's website to verify yourself.
                        </p>
                        <div className="mt-4 p-4 bg-blue-500 text-white rounded-md cursor-pointer">Donate Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>

  );
};

export default DonationForm;
