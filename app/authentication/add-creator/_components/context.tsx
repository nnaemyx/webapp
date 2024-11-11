'use client'

import React, { createContext, useContext, useState } from 'react'

export type dataType = {
  type: string;
  firstname: string;
  surname: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: string;
  Bank_Name: string;
  Bank_AccountNumber: string;
  Bank_AccountName: string;
  ID_Type: string;
  ID_Number: string;
  username: string;
}
type EventCreatorType = {
  data: dataType
  setData:  React.Dispatch<React.SetStateAction<dataType>>
}

const data = {
  type:"",
  firstname: "",
  surname: "",
  email: "",
  phoneNumber: "",
  password: "",
  address: "",
  Bank_Name:"",
  Bank_AccountNumber:"",
  Bank_AccountName:"",
  ID_Type:"",
  ID_Number:"",
  username:""}

  const defaultData= {
    data,
    setData: () => {}
  }

  const EventCreatorContext = createContext<EventCreatorType>(defaultData);
  export const useEventCreatorContext = () =>{
    return useContext(EventCreatorContext)
  }
  export const EventCreatorContextProvider = ({children}: {children : React.ReactNode}) =>{
    const [data, setData] = useState<dataType>({
      type:"",
      firstname: "",
      surname: "",
      email: "",
      phoneNumber: "",
      password: "",
      address: "",
      Bank_Name:"",
      Bank_AccountNumber:"",
      Bank_AccountName:"",
      ID_Type:"",
      ID_Number:"",
      username:""})
   
    return(
      <EventCreatorContext.Provider value={{data, setData}}>
       {children}
      </EventCreatorContext.Provider>
    )
  }
