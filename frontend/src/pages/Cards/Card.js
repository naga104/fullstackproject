import React, { useContext, useEffect } from 'react'
import { Data } from "../../Componets/Context/TourContext"
import "./Card.css";
import {useNavigate} from "react-router-dom"
import location from "../../assets/location1.png"


const Card = () => {
    const { card, tour } = useContext(Data);
    const view =useNavigate()

    
    //getrequest function 

    useEffect(() => {
        tour();
    }, []);


    return (
        <>

            <div className="text">
                {
                    card && card.map((item) => {
                        const { _id, title, addresses, image, locationfee,description } = item
                        return (
                            <div className='card'>
                                <div className="imagecard">
                                    <img src={image} alt='' />
                                </div>
                                <div className='carddata'>
                                    <h1>{title}</h1>
                                    <p>{description.substring(0,40)}...</p>
                                    <h2><img src={location} alt=''/>{addresses}</h2>
                                    <p>${locationfee}</p>
                                    <button onClick={()=>{
                                    localStorage.setItem('naga',JSON.stringify(_id))
                                        
                                        view("/viewlocation")
                                    }}>viewmore..</button>
                                </div>
                            </div>

            )
                    })
                }
        
            </div>






        </>
    )
}

export default Card