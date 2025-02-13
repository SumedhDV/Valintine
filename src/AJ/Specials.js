import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Specials = () => {
  const [ajData, SetAjData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:4000/AJ`)
      .then(
        (res) => SetAjData(res.data)

      )
      .catch(
        (err) => console.log(err)

      )
  }

  )
  return (
    <div className='container-fluid'>
      <marquee className="text-danger">Please click on every letter to Know More.....</marquee>
      <div className='row'>
        {
          ajData.map((ajd) => {
            return (

              <div className='col-6 col-sm-4'>
                <NavLink to={`/ViewPage/${ajd.id}`}>
                  <button id="ajdButton">{ajd.intial}
                  </button>
                </NavLink>

              </div>
            )
          })

        }

      </div>




    </div>
  )
}

export default Specials