import axios from 'axios';
import React, {useState } from 'react'

const AddMessage = () => {
  const[name,setName]=useState("");
  const[message,setMessaage]=useState("");
  const postMessage=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:4000/Message`,{name,message})
    .then(()=>{
      alert("Message Added Successfully")
      setName("")
      setMessaage("")
    })
    .catch(()=>{
      alert("Error")
    })

  }

  return (
    <div className='container'>
      <h1 className='text-center text-primary'>
        ADD Your AJ
      </h1>
      <form onSubmit={postMessage} className='text-center p-5'>
        <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control mb-3'></input>
        <input type="text" name="message" placeholder='Message' value={message} onChange={(e)=>setMessaage(e.target.value)} className='form-control mb-3'></input>
        <input type="submit" value="Add Your message" className='btn btn-danger' ></input>

      </form>
    </div>
  )
}

export default AddMessage