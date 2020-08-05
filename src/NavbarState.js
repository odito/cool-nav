import React, { Component } from 'react';
import logo from './logo.png'

export default class NavbarState extends Component {

 state={
     stat:false
 }


 actSidebar=()=>{

 console.log('work');

     this.setState({
         stat:!this.state.stat
     })
 }


 close=()=>{
     if(this.state.stat===true){
       this.setState({
           stat:false
       })
     }
 }



    render() {
        return (
            <div className="container sticky">
              <nav className="sticky">
                  <div className="logo-btn">
                      <a href="#" onClick={this.close}><img src={logo} alt=""/><span className="shoes">shoes</span>addict</a>

                      <div className="btn" onClick={this.actSidebar}>
                          <i className="fas fa-bars"></i>
                      </div>

                     
                  </div>

            {/* links */}
            <ul className={this.state.stat?"newLinks links  ":"links"} onClick={this.close}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact us</a></li>
             </ul>

              </nav>
            </div>
        )
    }
}
