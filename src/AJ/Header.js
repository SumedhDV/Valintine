import React from 'react'
import AJnav from "../Assets/AJ_nav.jpg"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="container-fluid text-center text-danger " id="topImg">
        <img src={AJnav} id="ajnav"></img>
        </div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        <b className='text-danger'>AJ</b>
        </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/specails">AJ-Specails</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/videos">Memories</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/message">Message</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/feedback">Feedback</NavLink>
              </li>
              <li className="nav-item">
            <NavLink className="nav-link " to="/privacy">Privacy and Terms</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Header