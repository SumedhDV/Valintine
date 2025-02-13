import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Slider from './Slider'
import Specials from './Specials'
import About from './About'
import Videos from './Videos'
import Message from './Message'
import Feedback from './Feedback'
import NoPage from './NoPage'
import Admindashboard from '../Admin/Admindashboard'
import Login from './Login'
import AjDashboard from './AjDashboard'
import ViewPage from './ViewPage'
import Privacy from './Privacy'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Slider/>}></Route>
            <Route path='/specails' element={<Specials/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/videos' element={<Videos/>}></Route>
            <Route path='/feedback' element={<Feedback/>}></Route>
            <Route path='/message' element={<Message/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/privacy' element={<Privacy/>}></Route>
            <Route path='/ViewPage/:id' element={<ViewPage/>}></Route>
            <Route path='/admindashbaordajhdgetyrtygsgdhgrgygHFCghh' element={<Admindashboard/>}></Route>
            <Route path='/ajdashbaordajhdgetyrtygsgdhgrgygHFCghh' element={<AjDashboard/>}></Route>
            <Route path='/*' element={<NoPage/>}></Route>
            
        </Routes>
    </div>
  )
}

export default Routing