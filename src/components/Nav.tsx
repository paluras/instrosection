import React from "react";
import { useState } from 'react'


function Nav(){
    
const [click, setClick] = useState(false)
    
        function handleClick(){
            setClick(!click)
            console.log("flme"); 
        }
    return(
        <nav>
        
        <div className='left-side-nav'>
            <img src='src\assets\logo.svg'></img>
            
                <button className='dropDownBtn'>Features 
                <img className='notHovered' src='src\assets\icon-arrow-down.svg'></img>
                <img className='hovered' src='src\assets\icon-arrow-up.svg'></img>
                    <div className='dropDown'>
                        <a><img src='src\assets\icon-calendar.svg'></img>    To do</a>
                        <a><img src='src\assets\icon-calendar.svg'></img>    Calendar</a>
                        <a><img src='src\assets\icon-calendar.svg'></img>    Reminders</a>
                        <a><img src='src\assets\icon-calendar.svg'></img>    Planing</a>
                    </div>
                </button>
                <button className='dropDownBtn'>Company  
                <img className='notHovered' src='src\assets\icon-arrow-down.svg'></img>
                <img className='hovered' src='src\assets\icon-arrow-up.svg'></img>
                    <div className='dropDown'>
                        <a>Histoy</a>
                        <a>Our Team</a>
                        <a>Blog</a>
                    </div>
                </button>
            <button>Careers</button>
            <button>About</button>
            
        </div>
        <div className='right-side-nav'>
          <button>Login</button>
          <button className='registerBtn'>Register</button>
          <img onClick={handleClick} 
          className='menu' src='src\assets\icon-menu.svg'></img>
        </div>
      </nav>
      
    )
}

export default Nav