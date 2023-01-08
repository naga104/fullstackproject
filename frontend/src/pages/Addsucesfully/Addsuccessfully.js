import React from 'react'
import './Addsuccessfully.css'
import success from '../../assets/sucesfully.jpg'
import { Link } from 'react-router-dom'
import arrow from "../../assets/arrow.png"
const Addsuccessfully = () => {
    return (
  <div className="arrow">
    <Link to="/location"><img src={arrow} className="images" alt=''/></Link>
    <div className='sucess-card'>
        <img src={success} alt="" />
        <h5>New Location</h5>
        <h5>Added Successfully</h5>
    </div>
  </div>
    )
}
export default Addsuccessfully