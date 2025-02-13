
import axios from 'axios';
import React, { useState } from 'react'

const AddNote = () => {
  const[url ,setUrl]=useState("");
  const[heading,setHeading]=useState("");
  const[image,setImage]=useState("");
  const[paragraph,setParagraph]=useState("");
  const addVideo=(e)=>{
    e.preventDefault()
    
    axios.post(`http://localhost:4000/Video`,{url,heading,image,paragraph})
    .then (()=>{
      alert("Video added Sucessfully")
      setUrl("");
      setHeading("");
      setImage("");
      setParagraph("");
    })
    .catch((e)=>console.log(e)
    )
    

  }
  return (
    <div className='contianer text-center'>
      <form onSubmit={addVideo}>
        <h1>ADD Video</h1>
        <input type='url' name="video" placeholder='Video Path' value={url} onChange={(e)=>setUrl(e.target.value)} className='form-control mb-3'></input>
        <input type='text' name="heading" placeholder='Video heading' value={heading} onChange={(e)=>setHeading(e.target.value)} className='form-control mb-3'></input>
        <input type='url' name="image" placeholder='Image' value={image}  onChange={(e)=>setImage(e.target.value)} className='form-control mb-3'></input>
        <input type='text' name="Paragraph" placeholder='Video Note' value={paragraph}  onChange={(e)=>setParagraph(e.target.value)} className='form-control mb-3'></input>
        <input type='submit' name="Add Video" value={'submit'} className='btn btn-danger mb-3'></input>
      </form>
      
    </div>
  )
}

export default AddNote