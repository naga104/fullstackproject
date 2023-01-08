import React, { useState } from 'react'
import axios from "axios"
// import FormReview from '../Form/FormReview';
import { Rating } from "react-simple-star-rating"
import "./Review.css"


const Review = () => {
    const tourid = JSON.parse(localStorage.getItem("naga"))
    const userid = JSON.parse(localStorage.getItem("user"))
    const {token} = userid

    const [reviewrate, SetReview] = useState({
        review: "",
        rating: ""
    })
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)


    }

    const handleText = (e) => {
        const { name, value } = e.target

        SetReview({
            ...reviewrate,
            [name]: value
        })
    }
    const newReview = new FormData()

    async function handlesubmit(e) {
        e.preventDefault();
        newReview.append("review", reviewrate.review); 
        newReview.append("rating", rating);
        await axios.post(`http://localhost:9999/api/review/${tourid}`, newReview,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        SetReview(
            {
                review: "",
                rating: ""
            })

            // {(e) => (typedNumber = e.target.value)} 
    }
    return (
        <>
            <div className="reviews">

                <form onSubmit={handlesubmit}>

                    <label htmlFor=''>Review:</label><br />
                    <textarea name="review"  id="#" cols="50" rows="5"value={reviewrate.review} onChange={handleText}> </textarea> <br />
                    <label htmlFor=''>Rating:</label><br />
                    <Rating ratingValue={rating}
                        onClick={handleRating}
                    />
  
                    <button >Submit</button>
                    
                </form>    
            </div>
            {/* <FormReview /> */}
        </>

    )
}

export default Review