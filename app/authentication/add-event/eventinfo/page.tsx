"use client";

import React, {useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Stylizedlogo from "/public/assests/stylized logo.png";
import sideImage from "/public/assests/signup image.png"
import FileUpload from "@/components/ui/fileUpload";

const numbers = [1,2]
const options = ["Arts Exhibition", "Business", "Birthday", "Conferences", "Corporate/Company Events", "Music Concerts", "Sports & Fitness", "Expositions", "Festivals & Fairs", "Community", "Fashion", "Food & Drinks"," Nightlife & Entertainment", "Kids & Family", "Religious Events", "Birthday", "Games & Hobbies", "Anniversaries", "Holidays", "Hangouts"]

function eventInfo() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [eventName, seteventName] = useState("");
  const [description, setdescription] = useState("");
  const [location, setlocation] = useState("");
  const [eventCategory, seteventCategory] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [socialMedia, setsocialMedia] = useState("");
  const [website, setwebsite] = useState("");
  const [primaryImage, setPrimaryImage] = useState<File[]>([]);
  const [secondaryImage, setSecondaryImage] = useState<File[]>([]);
  
   console.log(primaryImage)
   const details = [
    {type: "text", name: "Event name", placeholder: "GrooveFest Experience", value: eventName, edit: (value: string)=>{seteventName(value)}},
    {type: "text", name: "Description", placeholder: "Paint us a picture of your event in a few words!", value: description, edit: (value: string)=>{setdescription(value)}},
    {type: 'text', name: "Location", placeholder: "Where will the magic happen?", value: location, edit: (value: string)=>{setlocation(value)}},
    {type: 'text', name: "Event Category", value: location, options, edit: (value: string)=>{seteventCategory(value)}},
    {type: 'text', name: "Date", placeholder: "DD/MM/YY", value: date, edit: (value: string)=>{setdate(value)}},
    {type: "text", name: "Time", placeholder: "08:55 pm WAT", value: time, edit: (value: string)=>{settime(value)}}, 
    {type: 'text', name: "Social Media Page Link", placeholder: "Instagram.com/@tag", value: socialMedia, edit: (value: string)=>{setsocialMedia(value)}},
    {type: 'text', name: "Website", placeholder: "www.myevent.com", value: website, edit: (value: string)=>{setwebsite(value)}},
    {type: "file", name: "Upload primary event flier & imagery",  sup: 'yeah',value: primaryImage, edit: (newfile: File[])=>setPrimaryImage(newfile)},
    {type: "file", name: "Upload additional event fliers & imagery (up to 4 more)", sup: 'yeah',value: secondaryImage, edit: (newfile: File[])=>setSecondaryImage(newfile)},
]
const data = {
  eventName, description, location,eventCategory, date, time, socialMedia, 
}
  return (
    <div >
    <div className="flex justify-center px-4 py-4 font-inter">
      <div className="md:flex md:w-[65%] w-[100%] relative">
        <div className="lg:flex-1 lg:px-[8rem] justify-center items-center">
          <div>
            <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
          </div>
          <div>
            <h1 className="text-[24px] font-semibold text-success400">
              01 - Event information
            </h1>
            <p className="text-[14px] text-[#645D5D]">
              Your event access experience is about to get fun!
            </p>
          </div>
          <form className="flex flex-col w-[100%] gap-6 ">
            {details.map(({name, value, type, placeholder, edit, sup}, index)=>{
                return (     
              <div className= 'w-[90%] relative' key={name}>
                   <label className="text-[14px]">{name}</label>
                   {name === "Description" &&
                   <textarea 
                   rows={6}
                   name={name}
                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder={placeholder}
                   ></textarea>
                  }
                   {name === "Event Category" &&
                    <select key={index} className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]">
                    {options?.map((option, i)=>{
                        return (
                            <option key={i} value={option}>{option}</option>
                        )
                    })}
                  </select>
                  }
                   {(name !="Description" && name != "Event Category" && sup != "yeah" ) &&
                   <input 
                   type={type}
                   name={name}
                   className={"w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 " + (!sup && 'border')}
                   placeholder={placeholder}
                   accept="image/png, imae/jpeg"
                   ></input>
                  } 
                  {
                    sup && 
                   <FileUpload setFile={edit} files={value}/>
                  }
                </div>
                )
            })}
          </form>
          <div className="py-6 flex flex-col justify-center items-center gap-4 w-[90%]">
          <button
              type="submit"
              className="text-white bg-success400 w-[80%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
            >
             <p>Submit</p>
            </button>

            <div className='text-grey400 text-[12px]'>By continuing past this page, you acknowledge that you read, and agree to our <Link href='' className='underline text-grey700 '>Terms & Conditions for Eventcreators</Link> and our <Link href='' className='underline text-grey700'>Eventcreators Service Agreement</Link>.</div>
          </div>
        </div>
      <div className="flex items-center absolute right-2 top-[100px]">
      {numbers.map((number)=>{
        return (
          <div className="flex items-center" key={number}>
            <div className={"flex w-[35px] h-[35px]  rounded-full justify-center items-center " + (number < 2 ? "bg-success400" : 'bg-grey400')}>
              {number}
            </div>
            {number < 2 && <div className="flex w-[40px] h-[2px] bg-grey400 "></div>}
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

export default eventInfo;
