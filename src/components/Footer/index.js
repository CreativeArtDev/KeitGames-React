import React, { Component } from 'react'
import '../../styles/style.css';
import '../../styles/Keit.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footerResponsive">
			<div className="footerResponsiveContent">
				<a href="products.html" className="testbutton">Apps</a>
				<a href="contact.html" className="testbutton">Contact</a>
				<a href="merch.html" className="testbutton">Merch</a>
				<a href="news.html" className="testbutton">News</a>
				<a href="press/" className="testbutton">Press Kit</a>
				
			</div>
      <span className="row footer-logo-text">KeitGames 2015</span>
      {/* <iframe 
      src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=124&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId" 
      width="124" height="46" style={{border:'none',overflow:'hidden'}} 
      scrolling="no" frameborder="0" 
      allowTransparency="true" allow="encrypted-media" /> */}
      <div className="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
		</div>
    )
  }
}
