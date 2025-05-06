import React from 'react'
import logo  from  '../Assets/service-logo.jpg'
import {NavLink} from "react-router-dom"
import headermodule from './Header.module.css'

const Header = () =>{
  return(
      <div className={`${headermodule.header}`}>
          <nav className="navbar navbar-expand-lg p-0">
              <div className="container">
                   <NavLink className="navbar-brand" to="/">
                      <img src={logo} className={headermodule.logo} alt="Logo"/>
                   </NavLink>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                      <span className="navbar-toggler-icon"></span>
                      </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/services">Services</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/bookservice">Book Service </NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/Offers">Offers</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                          </li>


                      </ul>
                  </div>
           </div>
          </nav>
      </div>

  );
}


export default Header