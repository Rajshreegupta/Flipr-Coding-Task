import React, { Component } from 'react';
import Navbar from './Navbar'
import './App.css';
import StatusButtons from './StatusButtons';
import {GridContainer} from './GridContainer';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import profile from './profile.svg';
import logo from './FrontendAssets/logo.svg';
import down from './FrontendAssets/down.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false
    }
  }
  render(){
    return (
      <div className="bootstrap-wrapper">
        <div className="app-container container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <Navbar />
            </div>
          </div>
          
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <h4></h4>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                
                <StatusButtons />

            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <h4></h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <h4>Timeline</h4>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <GridContainer />
            </div>
          
          </div>
            
        </div>
      </div>
    );
}
}
export default App;
