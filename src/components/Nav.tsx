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
                <img className='notHovered' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-down.svg'></img>
                <img className='hovered' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-up.svg'></img>
                    <div className='dropDown'>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-calendar.svg'></img>    To do</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-planning.svg'></img>    Calendar</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-reminders.svg'></img>    Reminders</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-todo.svg'></img>    Planing</a>
                    </div>
                </button>
                <button className='dropDownBtn'>Company  
                <img className='notHovered' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-down.svg'></img>
                <img className='hovered' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-up.svg'></img>
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