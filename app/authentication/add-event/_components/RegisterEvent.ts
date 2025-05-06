import { toast } from '@/components/ui/use-toast';
import { callApi } from '@zayne-labs/callapi';
import { eventDataType } from './context';
import { ticketType } from './types';

const RegisterEvent = async({setLoading, eventData, ticketsData}: {setLoading: React.Dispatch<React.SetStateAction<boolean>>, eventData: eventDataType, ticketsData: ticketType[]}) =>{

    const formdata = new FormData()
    formdata.append("Address", eventData.Address as string)
    formdata.append("Date", eventData.Date as string)
    formdata.append("Time", eventData.Time as string)
    formdata.append("Description", eventData.Description as string)
    formdata.append("Event_category", eventData.Event_category as string)
    formdata.append("Event_name", eventData.Event_name as string)
    formdata.append("Website", eventData.Website as string)
    formdata.append("Socials", eventData.Socials as string)
    eventData.Primary_flier?.forEach((file: File) => {
            formdata.append("Primary_flier", file);})
    eventData.Secondary_fliers?.forEach((file: File) => {
            formdata.append("Secondary_fliers", file);
          });
    setLoading(true)
    const {data: eventResponse, error} =  await callApi<{message: string, eventId:string} >( process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? `http://localhost:5000/api/event/create` : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/event/create`,
            {body: formdata, method: "POST", credentials: "include"})
            if(error){
                toast({
                           variant: "destructive",
                           description: error.message,
                         });    
            }
            if(eventResponse){
               await callApi<{message: string, createdTicketId: string[]}>(process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? `http://localhost:5000/api/ticket/create/${eventResponse.eventId}` : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ticket/create/${eventResponse.eventId}`,
                    {
                        body: {newTickets: ticketsData}, method: "POST",
                        credentials: "include",
                        onResponse: ({data})=>{
                            toast({description: `Event and ${data.message}`});
                            setLoading(false)
                            localStorage.removeItem("eventData")
                        },
                        onError: ({error})=>{
                            toast({variant: "destructive",description: error.message,});    
                            setLoading(false)   
                        }
                    }
                )
            }        
    
    }

  export default RegisterEvent