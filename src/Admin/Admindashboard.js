import React, { useState } from 'react'
import Specials from '../AJ/Specials';
import { AddAj } from './AddAj';
import Welcome from './Welcome';
import AddNote from './AddNote';
import AddMessage from './AddMessage';
import Message from '../AJ/Message';
import ViewFeedback from './ViewFeedback';

const Admindashboard = () => {
    const[view, setView]=useState();
    const Dashboard=()=>{

    switch (view) {
        case "addAj":return(<AddAj/>)     
            break;
        case "specail":return(<Specials/>)     
            break;
        case "addNote":return(<AddNote/>)     
            break;
        case "viewNote":return(<AddNote/>)     
            break;
        case "addMessage":return(<AddMessage/>)     
            break;
        case "ViewMessage":return(<Message/>)     
            break;
        case "feedback":return(<ViewFeedback/>)     
            break;
        default:return(<Welcome/>)
            break;
    }


    }
   
    return (
        <div className='container-fluid'>
            <h2 className='text-center text-danger'>
                Sumedh Dashboard
            </h2>
            <div className='row'>
                <div className='col-12 col-xl-3' id='aside'>
                    <button onClick={()=>setView('addAj')}>Add AJ</button>
                    <button onClick={()=>setView('specail')}> View AJ</button>
                    <button onClick={()=>setView('addNote')}> Add Note</button>
                    <button onClick={()=>setView('viewNote')}>View Marque</button>
                    <button onClick={()=>setView('feedback')}>Feedback</button>
                    <button onClick={()=>setView('addMessage')}>Add Message</button>
                    <button onClick={()=>setView('ViewMessage')}>View Message</button>
                </div>
                <div className='col-12 col-xl-9'>
                    <Dashboard/>
                    

                </div>

            </div>
        </div>
    )
}

export default Admindashboard