// import axios from 'axios';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DynamicStar } from 'react-dynamic-star'
import LocationMap from '../../Componets/Map/Map';
import Review from '../Review/Review';
import "./Viewlocation.css";
import { Data } from '../../Componets/Context/TourContext';
import location from "../../assets/location1.png"



const Viewlocation = () => {
 const {toogleUpdate} = useContext(Data)

  const Navigate = useNavigate()
  const userid = JSON.parse(localStorage.getItem("user"))
    const {token} = userid
  const [viewdata, setViewdata] = useState([]);
  const [single,setSingle]=useState([])
  const View = async () => {
    const id = JSON.parse(localStorage.getItem("naga"))
    const res = await fetch(`http://localhost:9999/api/tourist/${id}`)
    const singledata = await res.json()
    console.log(singledata)
    setViewdata([singledata.TouristData]); 
    setSingle(singledata.locationiddata)
    // console.log(singledata.locationiddata)

  }
  useEffect(() => {
    View()
  }, [])
  const deleteData = async (_id) => {
    await axios.delete(`http://localhost:9999/api/tourist/${_id}`)
    View()
  }

  const Deletedata = async(_id)=>{
    await axios.delete(`http://localhost:9999/api/review/${_id}`,{headers:{
      "Authorization":`Bearer ${token}`
  }
})

 }



  return (
    <>

      <div className="text-card" >
        {
          viewdata.map((item,i)=> {
            const { location: { coordinate: [a, b] } } = item;
            return (
              <div className='cardscontainer'key={i}>
                <div className='cards' >
                  <div className="imagecards">
                    <img src={item.image} alt='' />
                  </div>
                  <div className='datacard'>

                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h2><img src={location} alt=''/>{item.addresses}</h2>
                    <p>${item.locationfee}</p>

                    <div className="button">
                      <div className="edit">
                        <button onClick={()=>{toogleUpdate(item)
                         Navigate("/Addlocation")}
                       
                        }>Edit</button>
                      </div>
                      <div className="delete">
                        <button onClick={() => {
                          deleteData(item._id);
                          Navigate("/location")
                        } }>Delete</button>
                      </div>
                    </div>

                  </div>


                </div>

                <div className="cardlocation">
                  <LocationMap lag={a} lat={b} />
                  <div className="reviewmap">
                  <Review />
                  </div>
                </div>
                
              </div>

            );
          })
        }
       
        <div className="rating">
        {
          single.map((item)=>{
            console.log(item)
            const{name,rating,review,_id}=item
            return(
              <div className='stars'>
              <p>{name}</p>
                <p>{rating}</p>
                <p>{review}</p>
                <DynamicStar rating= {rating} width="50" height="50"/>
                <div className="reviewbutton">
                  <button className='reviewbtn'>Edit</button>
                  <button className='deletebtn' onClick={()=>Deletedata(_id)}>Delete</button>
                </div>
                
  
              </div>
            )
          })
        }
        </div>


      </div>

    </>
  )
}

export default Viewlocation