import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AddAj = () => {
  const [intial,setIntial]=useState("");
  const [word,setWord]=useState("");
  const [paragraph,setParagraph]=useState("");
  const [image,setImage]=useState("")
  const postAj =(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:4000/AJ`,{intial,word,paragraph,image})
    .then(
      ()=>{alert("Letter is added "+intial)
        setIntial("");
        setWord("");
        setParagraph("");
        setImage("")
      }
    )
    .catch(
      (err)=>console.log(err)
    )

  }

  
    return (
    <div>
      <h1 className='text-center text-primary'>
        ADD Your AJ
      </h1>
      <form onSubmit={postAj} className='text-center p-5'>
        <input type="text" name="intial" placeholder='Intial Letter' value={intial} onChange={(e)=>setIntial(e.target.value)} className='form-control mb-3'></input>
        <input type="text" name="word" placeholder='Word' value={word} onChange={(e)=>setWord(e.target.value)} className='form-control mb-3'></input>
        <input type="text" name="paragraph" placeholder='Paragraph' value={paragraph} onChange={(e)=>setParagraph(e.target.value)} className='form-control mb-3'></input>
        <input type="url" name="image" placeholder='Image' value={image} onChange={(e)=>setImage(e.target.value)} className='form-control mb-3'></input>
        <input type="submit" value="Add AJ" className='btn btn-danger' ></input>

      </form>
    </div>
  )
}