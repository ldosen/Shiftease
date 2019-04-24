import React, { Component } from "react";
import {img} from "react-bootstrap"
import "./Home.css";
import Campus from "../Campus.png";

export default class Home extends Component {
  render() {
    return (
      
    
      <div className="Home">
        <div className="lander">
          <h1>Shift Ease</h1>
          <p>A simple employee scheduling app</p>
          </div>
        <img src={Campus} width="800" height="400" className="img-responsive"/>
      </div>
    );
  }
}