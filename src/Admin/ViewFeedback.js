import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewFeedback = () => {
    const [feedback,setfeedback]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/Feedback`)
        .then((res)=>{
            setfeedback(res.data)
        })
        .catch((err)=>console.log(err))
    })
  return (
    <div className="container text-center">
        <table className='table table-bordered'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Message</th>
                    <th>Message To World</th>
                    <th>Rating</th>
                </tr>


                {feedback.map((feed)=>{
                    return(
                        <tr>
                            <td>{feed.id}</td>
                            <td>{feed.name}</td>
                            <td>{feed.feeling}</td>
                            <td>{feed.message}</td>
                            <td>{feed.rating}</td>
                        </tr>
                    )

                })}
           
        </table>
    </div>
  )
  
}

export default ViewFeedback