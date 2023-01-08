import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import { useLogin } from '../../Hooks/useLogin';
import img from "../../assets/login.webp"
import image from "../../assets/google.png"
// import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();
  // const Navigate =useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    setEmail("");
    setPassword("");
    // Navigate("/location")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className='tour'>Tourism</h1>
        <div className="loginform">
          <div className="naga">
            <h1>welcome back</h1>
            <p>please enter detalis</p>
          </div>
          <div className='form'>
            <div className='field'>
              <h2>Login</h2>
              <label htmlFor="">Email:</label>
              <input type="email" name="Email:"placeholder='Please Enter email' onChange={(e) => setEmail(e.target.value)} value={email} required /><br />
            </div>
            <div className='field'>
              <label htmlFor="">Password:</label>
              <input type="password" name="password" placeholder='Please Enter password'onChange={(e) => setPassword(e.target.value)} value={password} required/><br />
            </div>
            <button className='signup'>signup</button>
            <div className="login">
              <button><img src={image} alt=""/>Singin with google</button>
              
            </div>
            {error && <p style={{color:"red"}}>{error} please enter valid  email or password </p>}
          <Link to="/Reg" >Register</Link>
          </div>
          <div className="photo">
            <img src={img} alt='' />
          </div>
        </div>
        


      </form>
      
    </>
  )
}

export default Login