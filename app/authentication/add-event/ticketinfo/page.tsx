import Image from 'next/image'
import React from 'react'
import Stylizedlogo from "/public/assests/stylized logo.png";
import { MinusSquareIcon, PlusSquareIcon, Users2Icon, XIcon } from 'lucide-react';

const page = () => {
    const ticketInfos = [
        {
            id: 1,
            name: 'Ticket 1',
            availableTickets: 1000,
            price: 100,
            description: 'This is a ticket for the event.',
            benefits: 'Some cool benefits for this ticket.'
        },
        {
            id: 2,
            name: 'Ticket 2',
            availableTickets: 500,
            price: 200,
            description: 'This is another ticket for the event.',
            benefits: 'Some more cool benefits for this ticket.'
        },
        {
            id: 3,
            name: 'Ticket 3',
            availableTickets: 200,
            price: 300,
            description: 'This is the third ticket for the event.',
            benefits: 'Some even more cool benefits for this ticket.'
        },
        {
            id: 4,
            name: 'Ticket 4',
            availableTickets: 100,
            price: 500,
            description: 'This is the fourth ticket for the event.',
            benefits: 'Some even more cool benefits for this ticket.'
        },
    ];
  return (
    <div className="flex flex-col justify-center">
        <div>
                <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
                <div className='px-3'>
                    <h1 className="text-[24px] font-semibold text-success400">
                    02 - Ticket information
                    </h1>
                    <p className="text-[14px] text-[#645D5D]">
                    Give cool names to your tickets, add prices & discount and add the benefits/perks/features of the ticket. Get creative!
                    </p>
                </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[85%] mx-auto py-8 '>
            {ticketInfos.map(({id, name, price, description})=>{
                return (
                <div key={id} className='border border-solid border-grey400 rounded-xl border-collapse relative'>
                    <div className='flex gap-2 border border-solid  border-grey400 px-6 py-5 rounded-t-xl border-collapse'>
                        <Users2Icon className='mt-[6px]'/>
                        <div className='flex flex-col'>
                            <p className='font-semibold text-[18px]'>{name}</p>
                            <p className='text-[12px] text-grey700'>Select how many tickets available for this ticket type.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 p-5 border border-solid  border-grey400'>
                        <PlusSquareIcon size={50} fontWeight={200} className='hover:cursor-pointer text-grey400'/>
                        <p className='font-semibold text-[66px]'>1000</p>
                        <MinusSquareIcon size={50} className='hover:cursor-pointer text-grey400'/>
                    </div>
                    <div className='flex flex-col gap-6 px-6 pt-4 pb-[100px] border border-solid  border-grey400 font-semibold'>
                        <div className='flex justify-between items-center'>
                            <p>Name for this ticket:</p>
                            <input className='px-3 py-1 border border-solid  border-grey400 rounded-md' type="text" name="ticket-name" placeholder='Regular/General Admission...' id="" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Features/benefits/perks of this ticket:</p>
                            <textarea rows={7}  name="ticket-features" placeholder={'1. Gate pass for 1 person. \n2. Free bottle of Fanta 50cl \n3. All Games tents access '}  className='px-3 border border-solid  border-grey400'/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className=''>Total:</p>
                            <p className='font-semibold py-2 px-6 border border-solid  border-grey400 text-grey400 rounded-md'>3000</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Name for this ticket:</p>
                            <p>NGN 3915</p>
                        </div>
                    </div>
                    <div className='flex font-semibold p-4 justify-between border border-solid  border-grey400 rounded-b-xl'>
                        <button className='py-3 px-10 md:px-20 border border-solid  border-grey400 rounded-md'>Cancel</button>
                        <button className='py-3 px-10 md:px-20  border border-solid  border-grey400 rounded-md bg-success300 text-white'>Create</button>
                    </div>
                    <XIcon className='absolute top-5 right-6 text-grey700'/>
                </div>
                )
            })}
                

        </div>
    </div>
  )
}

export default page