"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Stylizedlogo from "/public/assests/stylized logo.png";
import { ArrowLeft, MinusSquareIcon, PlusSquareIcon, Users2Icon, XIcon } from 'lucide-react';
import Pagination from '@/components/ui/pagination';
import Link from 'next/link';
import { useEventContext } from '../_components/context';
import { ticketType } from '../_components/types';
import RegisterEvent from '../_components/RegisterEvent';
import { toast } from '@/components/ui/use-toast';

const page = () => {
        class Ticket {
            id: number
            Ticket_name: string
            Quantity: number | ''
            Price: number | ""
            Features: string
            constructor({id, Ticket_name, Quantity, Price, Features}: ticketType){
                this.id = id
                this.Ticket_name = Ticket_name;
                this.Quantity = Quantity
                this.Price = Price
                this.Features = Features
            }

        }
        const [createdTicket, setCreatedTicket] = useState<number[]>([])
        const [loading, setLoading] = useState<boolean>(false)
    const [tickets, setTickets] = useState<ticketType[]>([
    {
        id: 1,
        Ticket_name: '',
        Quantity: "",
        Price: "",
        Features: ''
    },
    {
        id: 2,
        Ticket_name: '',
        Quantity: "",
        Price: "",
        Features: ''
    }])

    const addTicket =()=>{
        const ticket = new Ticket({id: tickets[tickets.length - 1].id + 1, Ticket_name:"", Quantity:0, Price:0, Features: ""})
        setTickets((prevTickets)=>[...prevTickets, ticket])
    }
    const removeTicket = (id: number) =>{
        setTickets((prevTicket)=> prevTicket.filter((ticket)=> ticket.id != id))
    }

    const updateTicket = (ticketId: number, updates: Partial<ticketType>) => {
            setTickets(prevTickets => 
              prevTickets.map(ticket => 
                ticket.id === ticketId 
                  ? { ...ticket, ...updates } 
                  : ticket
              )
            );
    };
   
    const {data,setData} = useEventContext()

    const addTicketToArray = (id: number) =>{
        setCreatedTicket((prev)=> [...createdTicket, id])
        console.log(createdTicket)
    }
    const checkIfSubmittedTicket = () =>{
        const ticketValuesFilled = tickets.map(({Ticket_name, Price, Features, Quantity}) => {
            return !!(Ticket_name && Price && Features && Quantity);
        }) as boolean[];
        return ticketValuesFilled.includes(false)
    }

    const submit = () =>{
        checkIfSubmittedTicket()
          ?  toast({description: "Please fill all ticket fields or remove any unfilled ticket", variant: "destructive"}) 
          :  RegisterEvent({eventData: data, setLoading, ticketsData: tickets })
    }

  return (
    <div className="flex flex-col justify-center p-8">
        <div>
                <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
                <div className='px-3 flex justify-between items-center'>
                    <div>
                    <h1 className="text-[24px] font-semibold text-success400">
                    02 - Ticket information
                    </h1>
                    <p className="text-[14px] text-[#645D5D]">
                    Give cool names to your tickets, add Prices & discount and add the Features/perks/features of the ticket. Get creative!
                    </p>
                    </div>
                    <Link href={"/authentication/add-event/eventinfo"} className='flex cursor-pointer'>
                        <ArrowLeft className='text-grey400'/>
                        <p>Back</p>
                    </Link>
                </div>
        </div>
        <Pagination numbers={[1,2]} i={3} position='flex items-center absolute md:right-[50%] top-[100px]'/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[85%] mx-auto py-8 '>
            {tickets.map(({id, Ticket_name, Price, Features, Quantity}, i)=>{
                return (
                <div key={id} className='border border-solid border-grey400 rounded-xl border-collapse relative'>
                    <div className='flex gap-2 border border-solid  border-grey400 px-6 py-5 rounded-t-xl border-collapse'>
                        <Users2Icon className='mt-[6px]'/>
                        <div className='flex flex-col'>
                            <p className='font-semibold text-[18px]'>{`Ticket ${i + 1}`}</p>
                            <p className='text-[12px] text-grey700'>Select how many tickets available for this ticket type.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 p-1 md:p-5 border border-solid  border-grey400'>
                        <MinusSquareIcon onClick={()=> updateTicket(id, {Quantity: Quantity && Quantity >= 2 ? Quantity - 1 : Quantity})} size={50} className='hover:cursor-pointer text-grey400'/>
                        <input type='number' placeholder='0' value={Quantity} onChange={(e)=> updateTicket(id, {Quantity: Number(e.target.value) })} className='font-semibold text-[50px] md:text-[66px] w-[50%] text-center'/>
                        <PlusSquareIcon onClick={()=> updateTicket(id, {Quantity: Quantity && Quantity + 1})} size={50} fontWeight={200} className='hover:cursor-pointer text-grey400'/>
                    </div>
                    <div className='flex flex-col gap-6 px-6 py-4 border border-solid  border-grey400 font-semibold'>
                        <div className='flex flex-col md:flex-row justify-between md:items-center items-start '>
                            <p>Name for this ticket:</p>
                            <input value={Ticket_name} onChange={(e)=> updateTicket(id, {Ticket_name: e.target.value})} className='px-3 py-1 border border-solid  border-grey400 rounded-md' type="text" name="ticket-name" placeholder='Regular/General Admission...' id="" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Features/Features/perks of this ticket:</p>
                            <textarea value={Features} onChange={(e)=> updateTicket(id, {Features: e.target.value})} rows={7}  name="ticket-features" placeholder={'1. Gate pass for 1 person. \n2. Free bottle of Fanta 50cl \n3. All Games tents access '}  className='px-3 border border-solid  border-grey400'/>
                        </div>
                        {/* <div className='flex justify-between items-center'>
                            <p className=''>Total:</p>
                            <p className='font-semibold py-2 px-6 border border-solid  border-grey400 text-grey400 rounded-md'>{Price}</p>
                        </div> */}
                        <div className='flex w-[100%] justify-between'>
                            <p className='w-[60%]'>Price for this ticket:</p>
                            <input type='number' placeholder='0' value={Price} onChange={(e)=> updateTicket(id, {Price: Number(e.target.value) })} className='border border-solid  border-grey400 font-semibold w-[40%] text-center'/>
                        </div>
                    </div>
                    {
                        createdTicket.includes(id) ?
                    <></>:
                    <div className='flex font-semibold p-4 justify-between border border-solid  border-grey400 rounded-b-xl'>
                        <button onClick={()=>{removeTicket(id)}} className='py-3 w-[35%] border border-solid  border-grey400 rounded-md'>Cancel</button>
                        <button onClick={()=> addTicketToArray(id)} className='py-3 w-[35%] border border-solid  border-grey400 rounded-md bg-success300 text-white'>Create</button>
                    </div> 
                    }
                    <XIcon onClick={()=>{removeTicket(id)}} className='absolute top-5 right-6 text-grey700'/>
                </div>
                )
            })}

        </div>
                <div className='flex flex-col gap-6 font-semibold p-4 justify-center items-center'>
                        <button onClick={addTicket} className='py-3 w-[65%] text-grey400 md:px-20 border border-solid  border-grey400 rounded-md'>Add more ticket types+</button>
                        <button onClick={submit} className='py-3 w-[80%] md:px-20  border border-solid  border-grey400 rounded-md bg-success300 text-white' >{loading ? "Loading" : "Submit"}</button>
                    </div>
    </div>
  )
}

export default page