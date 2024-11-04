"use client";

import React, {useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Stylizedlogo from "/public/assests/stylized logo.png";
import EyeShowIcon from "@/components/icons/EyeShowIcon";
import EyeHideIcon from "@/components/icons/EyeHideIcon";
import sideImage from "/public/assests/signup image.png"
import { useRouter } from "next/navigation";

function ContactDetails() {
const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const nextpage = () =>{
    router.push("/authentication/add-event/eventinfo")
  }
    const numbers = [1,2,3]
   const details = [
    {type: 'email', name: "Email Address", placeholder: "your email goes here", value: email, edit: (value: string)=>{setEmail(value)}},
    {type: showPassword ? 'text' : "password" , name: "Password", placeholder: "*******", value: password, edit: (value: string)=>{setPassword(value)}}
]
const data = {email, password}
  return (
    <div className="flex px-4 py-4 font-inter">
      <Image src={sideImage} alt="Onboarding Image" className="hidden md:flex w-[35%] max-h-full "/>
      <div className="md:flex md:w-[65%] w-[100%] relative">
        <div className="lg:flex-1 lg:px-[8rem]">
          <div>
            <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
          </div>
          <div>
            <h1 className="text-[24px] font-semibold text-success400">
             We'd like to know who is creating this event
            </h1>
            <p className="text-[14px] text-[#645D5D]">
              Add the event and password associated with your Event Creator account
            </p>
          </div>
          <form className="flex flex-wrap w-[100%] gap-4 ">
            {details.map(({name, value, type, placeholder, edit}, index)=>{
                return (         
          <div className='w-[100%] my-3 relative' key={index}>
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
          <div className="flex justify-end">
          <Link href='/authentication/forgot-password' className="underline">Forgot password</Link>
          </div>
          <div className="py-6 flex flex-col justify-center items-center gap-4">
          <button
              type="submit"
              className="text-white bg-success400 w-[80%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
              onClick={nextpage}
            >
             <p>Proceed</p>
            </button>
            <div>Not already an Event Creator? <Link href='/authentication/add-creator' className='text-success400'>Create Account</Link></div>
            <div className='text-grey400'>By continuing past this page, you acknowledge that you read, and agree to our <Link href='' className='underline text-grey700 '>Terms & Conditions for Eventcreators</Link> and our <Link href='' className='underline text-grey700'>Eventcreators Service Agreement</Link>.</div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default ContactDetails;
