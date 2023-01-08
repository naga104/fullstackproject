import React from 'react'
import { Link } from 'react-router-dom';
import image from "../../assets/vizga.jfif";
import "./Home.css"



const Home = () => {
  return (
    <div className='home'>
      <div className="image">
        <img src={image} alt="" />
        </div>

        <div className="content">
        <h1>Welcome to Tourism</h1>
          <p>Visakhapatnam is a port city and industrial center in the Indian state of Andhra Pradesh,
            <span className='span'>on the Bay of Bengal. It's known for its many beaches, including Ramakrishna Beach,</span>
            home to a preserved submarine at the Kursura Submarine Museum.</p>
            <div className="btn">
              <button><Link to="/location">View locations </Link></button>
            </div>
        </div>
      
      
    </div>
  )
}

export default Home