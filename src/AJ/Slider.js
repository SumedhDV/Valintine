import React from 'react'
import video from "../Assets/AJ_Video.mp4"
import V1 from "../Assets/V1.png"
import V2 from "../Assets/V2.jpg"
import V3 from "../Assets/V3.png"

const Slider = () => {
  return (
   <div className='container-fliud'>
    <div class="Videobg">
      <video width="100%" height="500" autoplay controls loop id="myvideoCont" >
      <source src={video} type="video/mp4"/>
     </video>
      </div>
    <div id="carouselExample" className="carousel slide" > 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={V1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={V2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={V3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    

   </div>
    
  )
}

export default Slider

