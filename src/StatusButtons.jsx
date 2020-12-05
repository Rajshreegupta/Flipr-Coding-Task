import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import profile from './profile.svg';
import logo from './FrontendAssets/logo.svg';
import down from './FrontendAssets/down.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

function StatusButtons(){
    return (
        <div className="bootstrap-wrapper">
        <div className="app-container container">
          <div className="topnav row">
            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                <c><img src={logo} width="50" height="50"/></c>
                <b>Intugine</b>
            </div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <a><img src={down}/></a>
                <a><img src={profile}/></a>
                <a>Transporters</a>
                <a>Brands</a>
                <a class="active">Home</a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <h4></h4>
            </div>
            <div className="status col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                {/* <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <h4>Donut Chart Container</h4>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                  <div className="percentage-container">
                    <span className="percentage-number">94</span>
                    <span className="percentage-sign">%</span>
                    <p>CUSTOMER SATISFACTION</p>
                  </div>
                  <div className="percentage-container">
                    <span className="percentage-number">89</span>
                    <span className="percentage-sign">%</span>
                    <p>TARGET SALES</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <h4>Bar Chart Container</h4>
                </div> */}
                <a class="active">DEL</a>
                <a>DEX</a>
                <a>OOD</a>
                <a>INT</a>
                <a>NFI</a>

            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <h4></h4>
            </div>
          </div>
          <h4 style={{ display: 'none' }}>Dialog Shown/Hidden with Logic</h4>
        </div>
      </div>
    );
}

export default StatusButtons;