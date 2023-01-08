import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { DynamicStar } from 'react-dynamic-star'
import "./FormReview.css"



const FormReview = () => {
  const [reviewdata, SetReviewdata] = useState([])
  const getData = async () => {

    const responseReview = await fetch("http://localhost:9999/api/review")
    const data = await responseReview.json()
    SetReviewdata(data)
    console.log(data);
  }
  useEffect(() => {
    getData()
  }, [])
  const Deletedata = async(_id)=>{
     await axios.delete(`http://localhost:9999/api/review/${_id}`)
     getData()
  }


  return (
    <>
     <div className="formreview">
      {
        reviewdata.map((item) => {
          const { _id,review, rating,} = item;
          return (
            <div className="review" key={_id}>
              <p>{review}</p>
              <DynamicStar rating= {rating}/>
              <button>Edit</button>
               <button onClick={()=>{Deletedata(_id)
              }}>Delete</button> 
            </div>

          )
        })
    
      }
      </div>
    
    </>
  )
}

export default FormReview