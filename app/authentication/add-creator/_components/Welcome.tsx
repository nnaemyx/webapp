'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Stylizedlogo from "/public/assests/stylized logo.png";
import Link from 'next/link';
import ContactDetails from './ContactDetails';

const Welcome = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [typeChecked, setTypeChecked] = useState("")
  const [page, setPage] = useState("1")
  const accounts = [
    {type: "Individual", description: "A great pal who wants to host your parties on Entrypal", selected: false},
    {type: "Business Firm/Agency/Company", description: "An event place, record label, etc? Create events for a global audience on entrypal", selected: false}
  ]

  const handleChange =(e: any)=>{
    setTypeChecked(e.target.value)
  }

  const nextpage = () =>{
    setPage("2")
  }
  
  return (
    <div>
      {page === "1"? 
  <div className='flex justify-center items-center flex-col text-center gap-5 w-[80%] m-auto '>
    <Image src={Stylizedlogo} alt="logo" />
    <div className=''>
    <div className='text-success400 mb-2'>Welcome to Entrypal</div>
    <p>To begin this journey, tell us what type of account you'd be creating</p>
    </div>

    <div className='flex h-[300px] gap-4 justify-center text-left'>
      {accounts.map(({type, description})=>{
        return (
          <div className='bg-gray-100 w-[45%] h-[100%] rounded-lg p-5'>
            <div className='h-[65%] w-full '>
              <input checked={typeChecked === type ? true : false } onChange={e => handleChange(e)} className='accent-success400' type="checkbox" name={type} id="" value={type} />
            </div>
            <div className='h-[35%]'>
            <div className='text-success400'>{type}</div>
            <div className='text-[12px]'>{description}</div>
            </div>
          </div>
        )
      })}
    </div>
       <button
              type="submit"
              className="text-white bg-success400 w-[60%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
              onClick={nextpage}
            >
             <p>Proceed</p>
            </button>
            <div>Already an Event Creator? <Link href='/authentication/login' className='text-success400'>Click here</Link></div>

            <div className='text-grey400'>By continuing past this page, you acknowledge that you read, and agree to our <Link href='' className='underline text-grey700 '>Terms & Conditions for Eventcreators</Link> and our <Link href='' className='underline text-grey700'>Eventcreators Service Agreement</Link>.</div>
  </div>:
  <ContactDetails/>
    }
    </div>
  )
}

export default Welcome