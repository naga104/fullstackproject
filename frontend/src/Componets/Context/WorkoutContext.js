// import React, { useState } from 'react'
// import axios from "axios"
// import { createContext } from 'react';
// import { useAuthContext } from "../../Hooks/useAuthContext";
// export const Data = createContext();

// const WorkoutContext = ({ children }) => {
//   const { user } = useAuthContext();
//   /*Get request--*/
//   const [workouts, setWorkouts,] = useState(null);
//   // get function
//   const getWorkouts = async () => {

//     // axios.get('http://localhost:4000/api/workouts', {
//     //   headers: {
//     //     'Authorization': `Bearer ${user.token}`
//     //   }
//     // })
//     //   .then((res) => {
//     //     setWorkouts(res.data);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error)
//       // })

//     const response = await axios.get("http://localhost:4000/api/workouts",
//     {
//       headers:{
//         "Authorization":`Bearer ${user.token}`
//       }
//     });
//     const data = await response.data;
//     setWorkouts(data);

//   }
//   /*-----=post request----*/
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
   

//   })
//   /*----delete workouts---*/
//   const deleteWorkout = async (_id) => {
//     await axios.delete(`http://localhost:4000/api/workouts/${_id}`, {
//       headers: {
//         Authorization: `Bearer ${user.token}`
//       }
//     });
//     getWorkouts();

//   }
//   /*----update workouts----*/
//   const [updateForm, setUpdateForm] = useState({
//     _id: null,
//     username:"",
//     password:""

//   })

//   const toggleUpdate = (item) => {
//     setUpdateForm({
//       _id: item._id,
//       username: item.username,
//       password: item.password,
//     })

//   }

//   return (
//     <>
//       <Data.Provider
//         value={{ workouts, setWorkouts, getWorkouts, form, setForm, deleteWorkout, toggleUpdate, updateForm, setUpdateForm }}>
//         {children}
//       </Data.Provider>
//     </>
//   )
//   }

// export default WorkoutContext