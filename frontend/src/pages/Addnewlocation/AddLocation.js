import React, { useContext, useState } from 'react'
import './AddLocationstyle.css'
// import { Link } from 'react-router-dom'
import axios from 'axios';
import { Data } from "../../Componets/Context/TourContext"
import { useNavigate } from 'react-router-dom';
// import location1 from "../../assets/location1.png"


const AddLocation = () => {
    /*---post request----*/
    const formdata = new FormData()

    const { form, setForm,updateform,setUpdateform } = useContext(Data)
    function upadataFormFiled(e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }
    const Navigate =useNavigate();
    const id = JSON.parse(localStorage.getItem("naga"))
    const [buffer,setBuffer]=useState(false)

const url = "http://localhost:9999/api/tourist"
        // const formdata = new FormData()
      const uploadFile = (e)=>{
        const file = e.target.files[0]
        formdata.append("image",file)
      }

      const createWorkout= async(e)=>{
        e.preventDefault()
        setBuffer(true)
        formdata.append("title",form.title)
        formdata.append("addresses",form.addresses)
        formdata.append("description",form.description)
        formdata.append("locationfee", form.locationfee)
        
      
       
      try{
        const res = await axios.post(url,formdata)
        setBuffer(false)
        Navigate("/Addsuccessfully")

        // if(data.success=== true){
        //     setTitle("")
        console.log(res);
            
        }catch(err){
            console.log(err);
          }
      } 
      if(buffer){
       return( <div>
            <h1 style={{color:'red'}}>Loading.....</h1>
        </div>)
      }

    //  update data
    const upadateOnchange=(e)=>{
        const { name, value } = e.target;
        setUpdateform({
            ...updateform,
            [name]: value,
        });
    }
    const mainurl = `http://localhost:9999/api/tourist/${id}`
      const reuploadFile=(e)=> {
        const file = e.target.files[0];
        formdata.append("image", file);
    }

      const updateWorkout= async(e)=>{
        e.preventDefault()
        setBuffer(true)
        formdata.append("title",updateform.title)
        formdata.append("addresses",updateform.addresses)
        formdata.append("description",updateform.description)
        formdata.append("locationfee", updateform.locationfee)
       
        const res = await axios.patch(mainurl,formdata)


      try{
        setBuffer(false)
        Navigate("/Addsuccessfully")

        
        // if(data.success=== true){
        //     setTitle("")
        console.log(res);
            
        }catch(err){
            console.log(err);
          }
      } 
    
    
    return (
        <div>
        {console.log(updateform)}
         {
            updateform.title === "" ?  
                
                (
                    <div className='totalForm'>
                        <h1>Add Locations</h1>
                        <form onSubmit={createWorkout} className='addLocation'>

                            <div>
                                <label>Title</label><br />
                                <input type="text" name="title" value={form.title} onChange={upadataFormFiled} />
                            </div>
                            <div className='Location'>
                                <div>
                                    <label>Location</label><br />
                                    <input type="text" placeholder='Serch for Location'name="addresses" value={form.addresses} onChange={upadataFormFiled} />
                                </div>
                                <div>
                                    <label>Location Price</label><br />
                                    <input type="number" name="locationfee" value={form.locationfee} onChange={upadataFormFiled} />
                                </div>
                            </div>
                            <div>
                                <label>Description</label><br />
                                <input type="text" name="description" value={form.description} onChange={upadataFormFiled} />
                            </div>

                            <div>
                                <label>Image</label><br />
                                <input type="file" placeholder='Choose Images' name="image" value={form.image} onChange={uploadFile} /> 
                            </div>
                            
            
                        <button>Addlocation</button>
                           

                        </form>
                    </div>
                )
        : "" }

{
    updateform.title !== "" ? (
        <div className='totalForm'>
                        <h1>update Locations</h1>
                        <form onSubmit={updateWorkout} className='addLocation'>

                            <div>
                                <label>Title</label><br />
                                <input type="text" name="title" value={updateform.title} onChange={upadateOnchange} />
                            </div>
                            <div className='Location'>
                                <div>
                                    <label>Location</label><br />
                                    <input type="text" placeholder='Serch for Location' name="addresses" value={updateform.addresses} onChange={upadateOnchange} />
                                </div>
                                <div>
                                    <label>Location Price</label><br />
                                    <input type="number" name="locationfee" value={updateform.locationfee} onChange={upadateOnchange} />
                                </div>
                            </div>
                            <div>
                                <label>Description</label><br />
                                <input type="text" name="description" value={updateform.description} onChange={upadateOnchange} />
                            </div>

                            <div>
                                <label>Image</label><br />
                                <input type="file" placeholder='Choose Images' name="image" value={form.image} onChange={reuploadFile} /> 
                            </div>
                            
            
                        <button>Addlocation</button>
                           

                        </form>
                    </div>
    )
: ""}
 
            
           
              

 
        </div>
    )
}



export default AddLocation