import React from 'react'
import {Link} from 'react-router-dom'

const NavbarForm = () => {
  return (
    <div className='flex nav justify align'>
        <div>
            <h2 className='h2'style={{color:"white",fontFamily:"'Nova Square', sans-serif", fontSize:"30px",fontSize:"30px"}}>Kalvium</h2>
        </div>
        <div> 
            <Link to={"/"}><button id='btn'>HOME</button></Link>
        </div>
    </div>
  )
}

export default NavbarForm