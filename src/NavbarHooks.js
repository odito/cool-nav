import React,{useState} from 'react';
import logo from './logo.png'



export default function NavbarHooks() {

const [state, setState]= useState(false);


const handleClose=()=>{
    if(state===true){
      setState(!state);
    }
}


    return (
        <div className="container sticky">
              <nav className="sticky">
                  <div className="logo-btn">
                      <a href="#" onClick={handleClose} ><img src={logo} alt=""/><span className="shoes">shoes</span>addict</a>

                      <div className="btn" onClick={()=>setState(!state)} >
                          <i className="fas fa-bars"></i>
                      </div>

                     
                  </div>

            {/* links */}
            <ul className={state? "newLinks links":"links"} onClick={handleClose}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact us</a></li>
             </ul>

              </nav>
            </div>
    )
}
