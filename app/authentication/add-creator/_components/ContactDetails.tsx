"use client";

import React, {useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Stylizedlogo from "/public/assests/stylized logo.png";
import EyeShowIcon from "@/components/icons/EyeShowIcon";
import EyeHideIcon from "@/components/icons/EyeHideIcon";
import sideImage from "/public/assests/signup image.png";
import { useEventCreatorContext } from './context';
import { useRouter } from "next/navigation";

function ContactDetails() {
const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setPreferredName] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  
    const numbers = [1,2,3]
   const details = [
    {type: "text", name: "First name", placeholder: "Chijioke", value: firstname, edit: (value: string)=>{setFirstname(value)}},
    {type: "text", name: "Surname", placeholder: "Earnest", value: surname, edit: (value: string)=>{setSurName(value)}},
    {type: 'email', name: "Email Address", placeholder: "your email goes here", value: email, edit: (value: string)=>{setEmail(value)}},
    {type: 'tel', name: "Phone Number", placeholder: "To learn about your event quicker", value: phoneNumber, edit: (value: string)=>{setPhoneNumber(value)}},
    {type: "text", name: "Physical Address", placeholder: "Where you work your magic!", value: address, edit: (value: string)=>{setAddress(value)}}, 
    {type: showPassword ? 'text' : "password" , name: "Password", placeholder: "*******", value: password, edit: (value: string)=>{setPassword(value)}},
    {type: showPassword ? 'text' : "password", name: "Confirm Password", placeholder: "*******", value: confirmPassword, edit: (value: string)=>{setConfirmPassword(value)}},
    {type: "text", name: "Preferred Name", placeholder: "Would appear as ticket issuer", value: username, edit: (value: string)=>{setPreferredName(value)}},
]

const {data, setData} = useEventCreatorContext()
  const nextpage = () =>{
    setData({...data, firstname : firstname, surname, email, phoneNumber, address, password, username})
    router.push("/authentication/add-creator/banking")
  }
  
  console.log(data)

  return (
    <div >
    <div className="flex px-4 py-4 font-inter">
      <div className="md:flex md:w-[65%] w-[100%] relative">
        <div className="lg:flex-1 lg:px-[8rem]">
          <div>
            <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
          </div>
          <div>
            <h1 className="text-[24px] font-semibold text-success400">
              02 - Contact Details
            </h1>
            <p className="text-[14px] text-[#645D5D]">
              Your event access experience is about to get fun!
            </p>
          </div>
          <form className="flex flex-wrap w-[100%] gap-4 ">
            {details.map(({name, value, type, placeholder, edit}, index)=>{
                return (         
          <div className={name != 'Email Address' && name != 'Preferred Name' ? "my-3 relative w-[47%]" : 'w-[100%] my-3 relative'} key={index}>
                <label className="text-[14px]">{name}</label>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => edit(e.target.value)}
                    className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                    required
                />
                {placeholder === "*******" ?  <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[20px] top-[70%] transform -translate-y-[50%] cursor-pointer"
                >
                  {showPassword ? <EyeShowIcon /> : <EyeHideIcon />}
                </span> : <></>}
                </div>
                )
            })}
          </form>
          <div className="py-6 flex flex-col justify-center items-center gap-4">
          <button
              type="submit"
              className="text-white bg-success400 w-[80%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
              onClick={nextpage}
            >
             <p>Proceed</p>
            </button>
            <div>Already an Event Creator? <Link href='/authentication/login' className='text-success400'>Click here</Link></div>

            <div className='text-grey400'>By continuing past this page, you acknowledge that you read, and agree to our <Link href='' className='underline text-grey700 '>Terms & Conditions for Eventcreators</Link> and our <Link href='' className='underline text-grey700'>Eventcreators Service Agreement</Link>.</div>
          </div>
        </div>
      <div className="flex items-center absolute right-2 top-[100px]">
      {numbers.map((number)=>{
        return (
          <div className="flex items-center" key={number}>
            <div onClick={nextpage} className={"flex w-[35px] h-[35px]  rounded-full justify-center items-center " + (number < 2 ? "bg-success400" : 'bg-grey400')}>
              {number}
            </div>
            {number < 3 ?
            <div className="flex w-[40px] h-[2px] bg-grey400 "></div>
            : <></>
          }
          </div>
        )
      })}
      </div>
      </div>
      <Image src={sideImage} alt="Onboarding Image" className="hidden md:flex w-[35%] max-h-full "/>
    </div> 
    </div>
  );
}

export default ContactDetails;
