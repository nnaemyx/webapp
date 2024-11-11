"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Stylizedlogo from "/public/assests/stylized logo.png";
import sideImage from "/public/assests/signup image.png";
import { DialogDemo } from "@/components/popup/EventgoerOtp";
import { dataType, useEventCreatorContext } from './context';
import { callApi } from "@zayne-labs/callapi";
import { toast } from "@/components/ui/use-toast";

const eventCreatorCallApi = callApi.create(
  { method: 'POST', credentials: 'include', dedupeStrategy: "none"}
)

function BankingDetails() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [bank, setBankName] = useState("Access Bank");
  const [idType, setIdType] = useState("Voters card");
  const [idNumber, setIdNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [eventCreator, setEventCreator] = useState({})
  const numbers = [1,2,3]
 
    const banks = ["Access Bank" ,"Citibank","Diamond Bank","Dynamic Standard Bank","Ecobank Nigeria","Fidelity Bank Nigeria","First Bank of Nigeria","First City Monument Bank","Guaranty Trust Bank","Heritage Bank Plc","Jaiz Bank","Keystone Bank Limited","Providus Bank Plc","Polaris Bank", "Opay","Palmpay", "Stanbic IBTC Bank Nigeria Limited","Standard Chartered Bank","Sterling Bank","Suntrust Bank Nigeria Limited","Union Bank of Nigeria","United Bank for Africa","Unity Bank Plc","Wema Bank","Zenith Bank"]
    const ids = ["Voters card", "NIN", "Drivers Licence", "International Passport"]
    const details = [
      {options: ids, type: "text", name: "ID Type", placeholder: "Voters Card", value: idType, edit: (value: string)=>{setIdType(value)}},
      {type: "text", name: "ID Number", placeholder: "0123456789", value: idNumber, edit: (value: string)=>{setIdNumber(value)}},
      {options: banks, type: 'text', name: "Bank Name", placeholder: "FirstBank Plc", value: bank, edit: (value: string)=>{setBankName(value)}},
      {type: 'tel', name: "Account Number", placeholder: "0123456789", value: accountNumber, edit: (value: string)=>{setAccountNumber(value)}},
      {type: "text", name: "Account Name", placeholder: "Chijioke", value: accountName, edit: (value: string)=>{setAccountName(value)}}
  ]
  const {data, setData} = useEventCreatorContext()
  const submit = async() =>{
    setEventCreator(async()=>{
      const newData = {...data, ID_Type: idType, ID_Number: idNumber, Bank_Name: bank, Bank_AccountName: accountName, Bank_AccountNumber: accountNumber }
      console.log(newData)
      await eventCreatorCallApi<{message: string, User:{name: string}} >( process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? 'api/goer/user' : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/goer/user`,
            {body: newData, method: "POST",
             onResponse: ({data})=>{
               toast({
                 description: `${data.message} Welcome ${data.User.name}`
               });
             },
             onError: ({ error})=>{     
                 toast({
                   variant: "destructive",
                   description: error.message,
                 });       
             }
    })

  })}
  
  return (
    <div className="flex px-4 py-4 font-inter">
      <div className="md:flex md:w-[65%] w-[100%] relative">
        <div className="lg:flex-1 lg:px-[8rem] ">
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
          <form className="flex flex-wrap w-[100%] gap-4">
            {details.map(({ options, name, value, type, placeholder, edit}, index)=>{
                return (    
                    options ?
                    <div className="w-[48%] my-3 " key={name}>
                         <label className="text-[14px]">{name}</label>
                        <select className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]">
                    {options?.map((option)=>{
                        return (
                            <option value={option} key={option}>{option}</option>
                        )
                    })}
                  </select>
                    </div>
                     :                          
          <div className="my-3 relative w-[48%]" key={index}>
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
              className="text-white bg-success400 w-[100%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
              onClick={submit}
            >
             <p>Submit</p>
            </button>
            <div>Already an Event Creator? <Link href='/authentication/login' className='text-success400'>Click here</Link></div>

            <div className='text-grey400'>By continuing past this page, you acknowledge that you read, and agree to our <Link href='' className='underline text-grey700 '>Terms & Conditions for Eventcreators</Link> and our <Link href='' className='underline text-grey700'>Eventcreators Service Agreement</Link>.</div>
          </div>
        </div>
        <div className="flex items-center absolute right-2 top-[100px]">
      {numbers.map((number)=>{
        return (
          <div className="flex items-center" key={number}>
            <div className={"flex w-[35px] h-[35px] rounded-full justify-center items-center " + (number < 3 ? "bg-success400" : 'bg-grey400')}>
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
      <DialogDemo isOpen={showDialog} onOpenChange={setShowDialog} data={{title:"New EventCreator", details:"Thank you for signing up. Create an event by clicking next.",button:"Next"}}/>
    </div>
  );
}

export default BankingDetails;
