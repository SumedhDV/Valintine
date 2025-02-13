// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { NavLink, useParams } from 'react-router-dom'

// const ViewPage = () => {
//   const{id}=useParams()
//   const[ajData,SetAjData]=useState([])
//   useEffect(()=>{
//     axios.get(`http://localhost:4000/AJ/${id}`)
//     .then((res)=>{
//       SetAjData(res.data)   
//     })
//     .catch((err)=>console.log(err)
//     )    
//   })
  
//   return (


//     <div className='container text-center'>
//       <div className='row'>
//       <div className='col-12 col-sm-8'>
//         <h1 className='text-danger'>{ajData.word}</h1>
//         <p>{ajData.paragraph}</p>


//       </div>
//       <div className='col-12 col-sm-4'>
//       { 
//       <img src={ajData.image} alt="No Image"></img>
//       }

//       </div>
      

//     </div>
//      <NavLink to={`/specails`}>
//       <button className='btn btn-danger m-5'>back
//       </button>
//       </NavLink>
//     </div>
//   )
// }

// export default ViewPage


// ///

import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const ViewPage = () => {
  const { id } = useParams();
  const [ajData, setAjData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/AJ/${id}`)
      .then((res) => {
        setAjData(res.data);
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, [id]); 

  return (
    <div className="container text-center">
      <marquee className="text-danger"> Hold for some second the Image is loading for you</marquee>
      <div className="row">
        <div className="col-12 col-sm-8">
          <h1 className="text-danger">{ajData.word || "No Title"}</h1>
          <p><span className="text-danger">"</span> {ajData.paragraph || "No Content Available"} <span className="text-danger">"</span> </p>
          <h1 id="ajSpecail">
            {ajData.intial}
          </h1>
        </div>
        <div className="col-12 col-sm-4">
          {ajData.image ? (
            <img
              src={ajData.image}
              alt="No Image"
              className="img-fluid"
            />
          ) : (
            <p>No Image Available</p>
          )}
        </div>
      </div>
      <NavLink to={`/specails`}>
        <button className="btn btn-danger m-5">Back</button>
      </NavLink>
    </div>
  );
};

export default ViewPage;
