import React, { Component } from 'react'

import '../../styles/Keit.css'



export default class AppThumb extends Component {
  render() {
    const imgSrc = "'"+this.props.src+"'";
    console.log(imgSrc);
    const proName = this.props.name;
    return (
					<div className="product">
						<div className="productIcon">
							<a href="/PTW/">
                <img 
                  src={require('../../images/_GameImages/smallTrans.png')} 
                  className="productImage" 
                  alt="PTW Icon" />
              </a>
						</div>
						<div className="productText">
							<a href="/PTW/">{proName}</a>
						</div>
					</div>
    )
  }
}
