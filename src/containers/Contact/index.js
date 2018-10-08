import React, { Component } from 'react';

import Form from '../../components/Form';

export default class Contact extends Component {
  render() {
    return (
      <div className="mainContent">
        <div style={styles.wrapper}>
          <span>Ways to make yourself heard:</span>
          <div style={styles.btnContactWay}>
            <a href="mailto:contact@keitgames.com" className="testbutton">Email</a>
            <a href="mailto:contact@keitgames.com" className="row" style={ styles.contactAddr }>contact@keitgames.com</a>
          </div>
          <div style={styles.btnContactWay}>
            <a href="products.html" className="testbutton">Facebook Page</a>
            <a href="https://www.facebook.com/KeitGames" className="row" style={ styles.contactAddr }>www.facebook.com/KeitGames</a>
          </div>
        </div>
        <Form />
        <div style={styles.appstore}>
          <span>View KeitGames Apps:</span>
          <div style={{margin:'auto',display:'table'}}>
            <a href="http://www.itunes.com/KeitGames">
            <img 
                  src={require('../../images/_GameImages/appStore.png')} 
                  className="productImage" 
                  alt="PTW Icon" /></a>
          </div>
          <div style={{marginTop:'60px'}} className="contactStyle">Or Search for <em>KeitGames</em> on the App Store
          <div style={{margin:'auto',display:'table', marginTop: '24px', marginBottom: '72px'}}>Enjoy :)</div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    textAlign:'center', 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    flexDirection:'column'
  },
  btnContactWay: {
    marginTop: '40px',
  },
  contactAddr: {
    marginTop: '10px',
    fontSize:'3vh'
  },
  appstore: {
    marginTop: '80px'
  },
  input: {
    fontSize: "14px",
    width: '100%'
  },
  btnSubscribe: {
    display:'inline-block',
  }
};