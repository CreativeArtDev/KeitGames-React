import React, { Component } from "react";

import HomeItem from "../../components/HomeItem";
import SubscribeForm from "../../components/SubscribeForm/";
import Form from "../../components/Form";



export default class Home extends Component {
  render() {
    return (
      <div className="mainContent">
        <HomeItem
          label="Check out my latest app: PTW - Leaderboard of Champions!"
          link="product"
          styles="largebuttonLightblue"
          button="PTW"
        />
        <HomeItem
          label="View all games:"
          link="product#game-product"
          styles="largebutton"
          button="Games"
        />
        <HomeItem
          label="View non-games:"
          link="product#other-product"
          styles="largebutton"
          button="Apps"
        />
        <Form 
          style={{marginBottom:'100px'}}
        />
        {/* <SubscribeForm /> */}
      </div>
    );
  }
}
