// import React from 'react'
// import axios from "axios"
// import { useContext } from "react";
// import { useAuthContext } from '../../Hooks/useAuthContext';
// import { Data } from "../Context/AuthContext";
// import "./Form.css";

// function Form() {
//   const {user} = useAuthContext();
//   /*-----post request--*/
//   const { workouts, setWorkouts, getWorkouts, form, setForm, updateForm, setUpdateForm } = useContext(Data);
//   /*---update form--*/
//   const updateFormFiled = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   //createworkout
//   const createWorkout = async (e) => {
//     e.preventDefault();
//      const response = await axios.post("http://localhost:9999/api/workouts", form,
//     {
//       headers:{
//          Authorization :`Bearer ${user.token}`
//       }
//     });
//     // console.log(response.data)
//     setWorkouts([...workouts, response.data]);
//     setForm({
//       username: "",
//       password: "",

//     });
//     getWorkouts();

//   };
//   //form field change
//   const updateFormFiledChange = (e) => {
//     const { name, value } = e.target;
//     setUpdateForm({
//       ...updateForm,
//       [name]: value
//     });

//   };

//   const updataWorkout = async (e) => {
//     e.preventDefault();
//     const { _id,username,password } = updateForm;
//     await axios.patch(`http://localhost:9999/api/workouts/${_id}`, {
//       username,
//       password
//     },
//     {
//       headers:{
//         Authorization :`Bearer ${user.token}`
//       }
//     });
//     setUpdateForm({
//       _id: null,
//      username: "",
//      password:""
//     });
//     getWorkouts();

//   };

//   return (
//     <div>
//       {!updateForm._id &&
//         (
//           <div className='form'>
//             <h1>Create Record</h1>
//             <form onSubmit={createWorkout}>
//               <div className='field'>
//                 <label htmlFor="">Login</label>
//                 <input type="text" name="user name:" value={form.title} onChange={updateFormFiled} /><br />
//               </div>
//               <div className='field'>
//                 <label htmlFor="">password:</label>
//                 <input type="text" name="password" value={form.reps} onChange={updateFormFiled} /><br />
//               </div>
//               {/* <div className='field'>
//                 <label htmlFor="">password:</label>
//                 <input type="text" name="load" value={form.load} onChange={updateFormFiled} /><br />
//               </div> */}

//               <button className='btn'>Submit</button>
//             </form>
//           </div>)}
//       {updateForm._id && (
//         <div className='form'>
//           <h1>Edit record</h1>
//           <form onSubmit={updataWorkout}>
//             <div className='field'>
//               <label htmlFor="">Register</label>
//               <input type="text" name="username:" value={updateForm.title} onChange={updateFormFiledChange} /><br />
//             </div>
//             <div className='field'>
//               <label htmlFor="">Password:</label>
//               <input type="text" name="password" value={updateForm.reps} onChange={updateFormFiledChange} /><br />
//             </div>
//             {/* <div className='field'>
//               <label htmlFor="">load:</label>
//               <input type="text" name="load" value={updateForm.load} onChange={updateFormFiledChange} /><br />
//             </div> */}
//             <button className='btn'>Submit</button>
//           </form>
//         </div>)}


//     </div>
//   );
// }

// export default Form;