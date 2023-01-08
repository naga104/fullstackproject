import React, { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
export const Data = createContext()

const TourContext = ({ children }) => {
  //get request
  const [card, setCard] = useState(null);

//get request function

  const tour = async () => {
    const response = await axios.get("http://localhost:9999/api/tourist");
    const data = response.data;
    console.log(data)
    setCard(data);

}
  //post request
  const [form, setForm] = useState({
    title:"",
    addresses:"",
    locationfee:"",
    description:"",
  })

  // update request
  const [updateform,setUpdateform] = useState({
    title:"",
    addresses:"",
    locationfee:"",
    description:"",
    image:""
  })
  const toogleUpdate = (item) =>{
    setUpdateform({
      title:item.title,
      addresses:item.addresses,
      locationfee:item.locationfee,
      description:item.description,
      image:item.image,
    })
  }
  return (
    <Data.Provider value={{ card, setCard ,tour, form ,setForm,updateform,setUpdateform,toogleUpdate}}>
      {
        children
      }
    </Data.Provider>
  )
}

export default TourContext