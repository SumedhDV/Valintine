import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Message = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/Message`)
      .then((res) => setMessage(res.data))
      .catch((err)=>console.log(err)
      )
  })
  return (
    <div className='container '>
      <div className='row'>
        {
          message.map((msg) => {
            return (
              <div className='col-12 col-sm-4'>
                <div class="card m-2">
                 
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p id="msgId">{msg.name}</p>
                      <footer class="blockquote-footer" id="msgDes"> <cite title="Source Title">{msg.message}</cite></footer>
                    </blockquote>
                  </div>
                </div>
              </div>

            )
          })
        }

      </div>
    </div>
  )
}

export default Message