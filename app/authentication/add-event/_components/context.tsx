'use client'

import React, { createContext, useContext, useState } from 'react'

export type eventDataType = {
  Event_name: string | null;
  Description: string | null;
  Event_category: string | null;
  Time: string | null;
  Date: string | null,
  Address: string | null;
  Socials: string | null;
  Website: string | null;
  Primary_flier: File[] | null;
  Secondary_fliers: File[] | null
}
type EventType = {
  data: eventDataType
  setData:  React.Dispatch<React.SetStateAction<eventDataType>>
}

const data = {
    Event_name: "",
    Description: "",
    Event_category: "",
    Time: "",
    Date: '',
    Address: "",
    Socials: "",
    Website: "",
    Primary_flier: null,
    Secondary_fliers: null,
  }

  const defaultData= {
    data,
    setData: () => {}
  }

  const EventContext = createContext<EventType>(defaultData);
  export const useEventContext = () =>{
    return useContext(EventContext)
  }
  export const EventContextProvider = ({children}: {children : React.ReactNode}) =>{
    const [data, setData] = useState<eventDataType>({
        Event_name: "",
        Description: "",
        Event_category: "",
        Time: "",
        Date: '',
        Address: "",
        Socials: "",
        Website: "",
        Primary_flier: null,
        Secondary_fliers: null,
  
      })
   
    return(
      <EventContext.Provider value={{data, setData}}>
       {children}
      </EventContext.Provider>
    )
  }
