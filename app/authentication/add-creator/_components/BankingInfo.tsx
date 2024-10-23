"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Stylizedlogo from "/public/assests/stylized logo.png";
import sideImage from "/public/assests/signup image.png"
function BankingDetails() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [email, setBankName] = useState("");
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phoneNumber, setAccountNumber] = useState("");
  const [address, setAccountName] = useState("");

   const details = [
    {type: "text", name: "ID Type", placeholder: "Voters Card", value: idType, edit: (value: string)=>{setIdType(value)}},
    {type: "text", name: "ID Number", placeholder: "0123456789", value: idNumber, edit: (value: string)=>{setIdNumber(value)}},
    {type: 'email', name: "Bank Name", placeholder: "FirstBank Plc", value: email, edit: (value: string)=>{setBankName(value)}},
    {type: 'tel', name: "Account Number", placeholder: "0123456789", value: phoneNumber, edit: (value: string)=>{setAccountNumber(value)}},
    {type: "text", name: "Account Name", placeholder: "Chijioke", value: address, edit: (value: string)=>{setAccountName(value)}}
]
 
    const banks = [
        { "id": "1", "name": "Access Bank" ,"code":"044" },
        { "id": "2", "name": "Citibank","code":"023" },
        { "id": "3", "name": "Diamond Bank","code":"063" },
        { "id": "4", "name": "Dynamic Standard Bank","code":"" },
        { "id": "5", "name": "Ecobank Nigeria","code":"050" },
        { "id": "6", "name": "Fidelity Bank Nigeria","code":"070" },
        { "id": "7", "name": "First Bank of Nigeria","code":"011" },
        { "id": "8", "name": "First City Monument Bank","code":"214" },
        { "id": "9", "name": "Guaranty Trust Bank","code":"058" },
        { "id": "10", "name": "Heritage Bank Plc","code":"030" },
        { "id": "11", "name": "Jaiz Bank","code":"301" },
        { "id": "12", "name": "Keystone Bank Limited","code":"082" },
        { "id": "13", "name": "Providus Bank Plc","code":"101" },
        { "id": "14", "name": "Polaris Bank","code":"076" },
        { "id": "15", "name": "Stanbic IBTC Bank Nigeria Limited","code":"221" },
        { "id": "16", "name": "Standard Chartered Bank","code":"068" },
        { "id": "17", "name": "Sterling Bank","code":"232" },
        { "id": "18", "name": "Suntrust Bank Nigeria Limited","code":"100" },
        { "id": "19", "name": "Union Bank of Nigeria","code":"032" },
        { "id": "20", "name": "United Bank for Africa","code":"033" },
        { "id": "21", "name": "Unity Bank Plc","code":"215" },
        { "id": "22", "name": "Wema Bank","code":"035" },
        { "id": "23", "name": "Zenith Bank","code":"057" }
    ]
  return (
    <div className="flex px-4 py-4 font-inter">
      <div className="md:flex md:w-[65%] w-[100%]">
        <div className="lg:flex-1 lg:px-[8rem]">
          <div>
            <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
          </div>
          <div>
            <h1 className="text-[24px] font-semibold text-success400">
              03 - Banking Information
            </h1>
            <p className="text-[14px] text-[#645D5D]">
              Last page! How do we pay you when your tickets sold?
            </p>
          </div>
          <form className="flex flex-wrap w-[100%] gap-4 ">
            {details.map(({name, value, type, placeholder, edit}, index)=>{
                return (    
                    
                    name === "Bank Name" ?
                    <div>
                         <label className="text-[14px]">{name}</label>
                        <select name="" id="" className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]">
                    {banks.map(({name}, index)=>{
                        return (
                            <option value={name}>{name}</option>
                        )
                    })}
                  </select>
                    </div>
                     :                          
          <div className="my-3 relative w-[47%]" key={index}>
                <label className="text-[14px]">{name}</label>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => edit(e.target.value)}
                    className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                    required
                />
                </div>
                )
            })}
          </form>
          <div className="py-6 flex flex-col justify-center items-center gap-4">
          <button
              type="submit"
              className="text-white bg-success400 w-[80%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
            >
             <p>Proceed</p>
            </button>
            <div>Already an Event Creator? <Link href='/authentication/login' className='text-success400'>Click here</Link></div>

            <div className='text-grey400'>By continuing past this page, you acknowledge that you read, and agree to our <Link href='' className='underline text-grey700 '>Terms & Conditions for Eventcreators</Link> and our <Link href='' className='underline text-grey700'>Eventcreators Service Agreement</Link>.</div>
          </div>
        </div>
      </div>
     
      <Image src={sideImage} alt="Onboarding Image" className="hidden md:flex w-[35%] max-h-full "/>
    </div>
  );
}

export default BankingDetails;
