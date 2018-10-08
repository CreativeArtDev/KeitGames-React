import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import MainButton from "../../components/MainButton";


export default class Menu extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerContent">
          <NavLink to="">
            <img 
               src={require('../../images/logo.png')} 
               alt="home"
               className="headerlogo"            
            />
          </NavLink>
          <NavLink to="/product">
            <MainButton name="Apps"/>
          </NavLink>
          <NavLink to="/contact">
            <MainButton name="Contact"/>
          </NavLink>
        </div>
      </div>
    );
  }
}
