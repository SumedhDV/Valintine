import React from 'react'

const Privacy = () => {
    return (
        <div className='Conatiner p-5 text-algin-justify'>
            <h1 className='text center'> Privancy and Data security</h1>

            <ul >
                <li>We Deeply believe in everyone privacy and personal life.</li>
                <li>Your values are the atmost important to us.</li>
                <li>The data is stored at secure site  <span className='text-primary'> cloudinary.com</span></li>
                <li>The Images and Video that i use will be deleted on and after 15 Feb 00:00:00 hr<br></br></li>
                <li>Cloudinary is a cloud-based media management service that provides solutions for image and video storage, optimization, transformation, and delivery.</li>
                <li> It is widely used by developers and businesses to handle media assets efficiently.</li>
            </ul>
            <ul className='text-danger'>
                <li>Authentication & access control to restrict media usage.</li>
                <li>Supports signed URLs for restricted access.</li>
                <li> Token-based authentication to restrict access to media.</li>
            </ul>


            <h1 className='text-primary text-center'>  Thank You</h1>

        </div>
    )
}

export default Privacy