"use client";

import React, {useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Stylizedlogo from "/public/assests/stylized logo.png";
import sideImage from "/public/assests/signup image.png"
import FileUpload from "@/components/ui/fileUpload";
import Pagination from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { useEventContext } from "../_components/context";
import { toast } from "@/components/ui/use-toast";

const numbers = [1,2]
const options = ["Arts Exhibition", "Business", "Birthday", "Conferences", "Corporate/Company Events", "Music Concerts", "Sports & Fitness", "Expositions", "Festivals & Fairs", "Community", "Fashion", "Food & Drinks"," Nightlife & Entertainment", "Kids & Family", "Religious Events", "Birthday", "Games & Hobbies", "Anniversaries", "Holidays", "Hangouts"]

function eventInfo() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const router = useRouter()
  const [Event_name, setEvent_name] = useState("");
  const [Description, setDescription] = useState<string>("");
  const [location, setlocation] = useState("");
  const [Event_Category, setEvent_Category] = useState(options[0]);
  const [date, setdate] = useState("");
  const [Time, setTime] = useState("");
  const [Socials, setSocials] = useState("");
  const [website, setwebsite] = useState("");
  const [Primary_flier, setPrimary_flier] = useState<File[]>([]);
  const [Secondary_fliers, setSecondary_fliers] = useState<File[]>([]);
  
   const details = [
    {type: "text", name: "Event name", placeholder: "GrooveFest Experience", value: Event_name, edit: (value: string)=>{setEvent_name(value)}},
    {type: "text", name: "Description", placeholder: "Paint us a picture of your event in a few words!", value: Description, edit: (value: string)=>{setDescription(value)}},
    {type: 'text', name: "Location", placeholder: "Where will the magic happen?", value: location, edit: (value: string)=>{setlocation(value)}},
    {type: 'text', name: "Event Category", value: location, options, edit: (value: string)=>{setEvent_Category(value)}},
    {type: 'text', name: "Date", placeholder: "DD/MM/YY", value: date, edit: (value: string)=>{setdate(value)}},
    {type: "text", name: "Time", placeholder: "08:55 pm WAT", value: Time, edit: (value: string)=>{setTime(value)}}, 
    {type: 'text', name: "Social Media Page Link", placeholder: "Instagram.com/@tag", value: Socials, edit: (value: string)=>{setSocials(value)}},
    {type: 'text', name: "Website", placeholder: "www.myevent.com", value: website, edit: (value: string)=>{setwebsite(value)}},
  ]
  const imageDetails = [
    {type: "file", name: "Upload primary event flier & imagery",  sup: 'yeah',value: Primary_flier, edit: (newfile: File[])=>setPrimary_flier(newfile)},
    {type: "file", name: "Upload additional event fliers & imagery (up to 4 more)", sup: 'yeah',value: Secondary_fliers, edit: (newfile: File[])=>setSecondary_fliers(newfile)},  
]
const {data,setData} = useEventContext()

const handleSubmit =()=>{
  if(Event_name && Event_Category  && Description && location && date && Socials && website &&  Primary_flier && Secondary_fliers  ){
    setData({...data, Event_name, Event_category: Event_Category , Description, Address: location, Date: date, Socials, Website:website,  Primary_flier, Secondary_fliers  })
    router.push("/authentication/add-event/ticketinfo")
  }
  else{
    toast({variant: "destructive",description: "Please fill all fields",});    
  }
}
  return (
    <div >
    <div className="flex justify-center p-4 font-inter">
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
            {details.map(({name, value, type, placeholder, edit}, index)=>{
                return (     
              <div className= 'w-[90%] relative' key={name}>
                   <label className="text-[14px]">{name}</label>
                   {name === "Description" &&
                   <textarea 
                   rows={6}
                   name={name}
                   value={value}
                   onChange={(e)=>edit(e.target.value)}
                   className="w-full p-3  border border-solid border-grey400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder={placeholder}
                   ></textarea>
                  }
                   {name === "Event Category" &&
                    <select key={index} className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                     onChange={(e)=>edit(e.target.value)}
                    >
                    {options?.map((option, i)=>{
                        return (
                            <option key={i} value={option}>{option}</option>
                        )
                    })}
                  </select>
                  }
                   {(name !="Description" && name != "Event Category") &&
                   <input 
                   type={type}
                   name={name}
                   value={value}
                   onChange={(e)=>edit(e.target.value)}
                   className={"w-full border border-solid border-grey400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "}
                   placeholder={placeholder}
                   accept="image/png, imae/jpeg"
                   ></input>
                  } 
                </div>
                )
              })}
              {imageDetails.map(({edit, value, name})=>{
                return(
                  <div>
                    <label className="text-[14px]">{name}</label>
                    <FileUpload key={name} setFile={edit} files={value}/>
                  </div>
                )
              })
              }
          </form>
          <div className="py-6 flex flex-col justify-center items-center gap-4 w-[90%]">
          <button
              type="submit"
              className="text-white bg-success400 w-[80%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
              onClick={handleSubmit}
            >
             <p>Submit</p>
            </button>

            <div className='text-grey400 text-[12px]'>By continuing past this page, you acknowledge that you read, and agree to our <Link href='' className='underline text-grey700 '>Terms & Conditions for Eventcreators</Link> and our <Link href='' className='underline text-grey700'>Eventcreators Service Agreement</Link>.</div>
          </div>
        </div>
      <Pagination numbers={numbers} i={2} position="flex items-center absolute right-2 top-[70px]"/>
      </div>
      <Image src={sideImage} alt="Onboarding Image" className="hidden md:flex w-[35%] max-h-full "/>
    </div>
    </div>
  );
}

export default eventInfo;
