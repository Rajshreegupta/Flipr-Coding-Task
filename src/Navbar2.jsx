import React from 'react'
import './index.css';
import profile from './profile.svg';
import logo from './FrontendAssets/logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'

function Navbar(){
    return (
        <div className="bootstrap-wrapper">
            



    <div class="topnav">
       <c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={logo} width="50" height="50"/></c>
       <b>Intugine</b>
       <a><img src={profile}/></a>
       <a>Transporters</a>
       <a>Brands</a>
       <a class="active">Home</a>
     </div>
    );
}

export default Navbar;