"use client";

import React, {useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Stylizedlogo from "/public/assests/stylized logo.png";
import EyeShowIcon from "@/components/icons/EyeShowIcon";
import EyeHideIcon from "@/components/icons/EyeHideIcon";
import sideImage from "/public/assests/signup image.png"
import { useRouter } from "next/navigation";
import { callApi } from "@zayne-labs/callapi";
import { toast } from "@/components/ui/use-toast";
function EventCreatorLogin() {
const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

   const details = [
    {type: 'email', name: "Email Address", placeholder: "your email goes here", value: email, edit: (value: string)=>{setEmail(value)}},
    {type: showPassword ? 'text' : "password" , name: "Password", placeholder: "*******", value: password, edit: (value: string)=>{setPassword(value)}}
]
const data = {email, password}

const submit = async() =>{
  setLoading(true)
    await callApi<{message: string, accessToken:string} >( process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? 'http://localhost:5000/api/creator/login' : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/creator/login`,
          {method: "POST", body:data, credentials: "include",
            onResponse: ({data})=>{
             toast({
               description: data.message
             });
             setLoading(false)
             router.push("/authentication/add-event/eventinfo")
           },
           onError: ({ error})=>{     
               toast({
                 variant: "destructive",
                 description: error.message,
               });    
               setLoading(false)   
           }
  })
}

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
              className="text-white bg-success400 w-[100%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
              onClick={submit}
            >
             {loading? <div
                  className="spinner-border animate-spin text-white inline-block w-4 h-4 border-4 rounded-full"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div> : <p> Proceed </p>}
            </button>
            <div>Not already an Event Creator? <Link href='/authentication/add-creator' className='text-success400'>Create Account</Link></div>
            <div className='text-grey400 text-[12px]'>By continuing past this page, you acknowledge that you read, and agree to our <Link href='' className='underline text-grey700 '>Terms & Conditions for Eventcreators</Link> and our <Link href='' className='underline text-grey700'>Eventcreators Service Agreement</Link>.</div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default EventCreatorLogin;
