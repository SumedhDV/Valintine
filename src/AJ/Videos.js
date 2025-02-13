import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/Video`)
      .then((res) => {
        setVideos(res.data)
      })
      .catch((e) => console.log(e)
      )
  })
  return (
    // <div className="container p-2">
    //   <div className="row">
    //     {videos.map((video, index) => (
    //       <div className="col-12 col-sm-4" key={index}>
    //         <div className="card w-300px">
    //           <video width="100%" height="300"  controls loop>
    //             <source src={video.url} type="video/mp4" />
               
    //           </video>
    //           <img id="fallback-img" src={video.image} class="w-100 d-none" alt="Fallback Image"/>
    //           <div className="card-body">
    //             <h5 className="card-title">{video.heading}</h5>
    //             <p className="card-text">{video.paragraph}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
<div className="container p-2">
  <marquee className="text-danger"> Please hold for few seconds the content is loading for You...</marquee>
  
  <div className="row">
    {videos.map((video, index) => (
      <div className="col-12 col-sm-4" key={index}>
        <div className="card w-300px">
          {video.url ? (
            <video
              width="100%"
              height="300"
              controls
              loop
              onError={(e) => {
                console.log(e)
              }}
            >
              <source src={video.url} type="video/mp4" />
            </video>
          ) : (
            <img
              id={`fallback-${index}`}
              src={video.image} // Show image if video URL is empty
              alt="Video not available"
              width="auto"
              height="300"
            />
          )}

          <div className="card-body">
            <h5 className="card-title">{video.heading}</h5>
            <p className="card-text">{video.paragraph}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
</div>




  )
}

export default Videos



