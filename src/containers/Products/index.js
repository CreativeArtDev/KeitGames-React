import React, { Component } from 'react'
import AppThumb from '../../components/AppThumb';

export default class Products extends Component {
  render() {
    return (
      <div>
        <div id="game-product" >
          <div className="contentMainTitle">Games:</div>
          <div className="productLine">
            {/* <AppThumb name="PTW" src="../../images/purpl.png" /> */}
          <AppThumb  name="GreenPurple"/>
          <AppThumb  name="GreenPurple"/>
          <AppThumb  name="GreenPurple"/>
          <AppThumb  name="GreenPurple"/>
          <AppThumb  name="GreenPurple"/>
          <AppThumb  name="GreenPurple"/>
          <AppThumb  name="GreenPurple"/>
          <AppThumb  name="GreenPurple"/>
          <AppThumb  name="GreenPurple"/>
        </div>
        </div>
        <div id="other-product">
          <div className="contentMainTitle">Other Apps:</div>
          <div id="other-product" className="productLine">
            <AppThumb  name="GreenPurple"/>
            <AppThumb  name="GreenPurple"/>
            <AppThumb  name="GreenPurple"/>
          </div>
        </div>  
      </div>
    )
  }
}
