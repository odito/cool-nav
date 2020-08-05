import React from 'react';
import './App.css';
import NavbarState from './NavbarState';
import NavbarHooks from './NavbarHooks';


function App() {
  return (
    <React.Fragment>
       <NavbarState />
       {/* <NavbarHooks /> */}

       <header>
         <h1>cool <span>Navbar</span></h1>
       </header>
       
    </React.Fragment>
  );
}

export default App;



