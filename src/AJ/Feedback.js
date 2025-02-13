import axios from 'axios';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Feedback = () => {
  
  const[name,setName]=useState("");
  const[feeling,setFeeling]=useState("");
  const[message,setMessage]=useState("");
  const [rating, setRating] = useState(""); 
  
  const handleStarClick = (newRating) => {
       setRating(newRating);
       };
  const postMsg=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:4000/Feedback`,{name,feeling,message,rating})
  .then(()=>{
    alert("Thank You for your review")
    setName("");
    setFeeling("");
    setMessage("");
    setRating("");
  })
  .catch((err)=>console.log(err)
  )

  }
  
  return (
    <div className='container p-5 text-center' id="feeback">
      <h1>Feedback</h1>
      <form className='container' onSubmit={postMsg}> 
        <input type="text" name="name" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control mb-3'></input>
        <input type="text" name="feeling" placeholder='What you feel for this website ' value={feeling} onChange={(e)=>setFeeling(e.target.value)} className='form-control mb-3'></input>
        <input type="text" name="message " placeholder='Your message to World' value={message} onChange={(e)=>setMessage(e.target.value)} className='form-control mb-3'></input>
      
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => handleStarClick(index + 1)} value={rating} onChange={(e)=>setRating(e.target.value)} >
          {rating > index ? <FaStar color="gold" /> : <FaStar color="gray" />}
        </span>
      ))}
      <br></br>
      
        <input type="Submit" name="Sumbit" id="submit"></input>
      
      </form>
    </div>
  )
  
}

export default Feedback