import React, { Component } from "react";
import Media from "react-media";

import "bootstrap/dist/css/bootstrap.min.css";

export default class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "", 
      firstname:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ emailVal: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ paddingTop: "100px", textAlign: "center" }}
      >
        <div style={{ textAlign: "center", fontSize: "19.6px" }}>
          Be the 1st to hear about new Apps:
        </div>
        <div style={{ alignItems: "center", justifyContent: "center" }}>
          <div
            className="row align-items-center justify-content-center col-lg-6 col-lg-offset-6 form-group"
            style={styles.inputArea}
          >
            <div
              className="col-md-12"
              style={{
                width: "66%",
                textAlign: "right",
                fontSize: "12px",
                marginTop: "16px"
              }}
            >
              <span style={{ color: "#c60" }}>*</span>
              indicates required
            </div>
            <label className="col-md-12 col-form-label" style={styles.label}>
              Email Address:
            </label>
            <div className="col-md-12" style={{ position: "relative" }}>
              <input
                className="form-control"
                style={styles.input}
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                reqruired
              />
              <span style={styles.starChar}>*</span>
            </div>
          </div>
          <div
            className="row align-items-center justify-content-center col-lg-6 col-lg-offset-6 form-group"
            style={styles.inputArea}
          >
            <label className="col-md-12 col-form-label" style={styles.label}>
              First Name:
            </label>
            <div className="col-md-12">
              <input
                className="form-control"
                style={styles.input}
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
        </div>
        <input
          style={styles.btnSubscribe}
          className="testbutton"
          type="submit"
          value="Subscribe"
        />
      </form>
    );
  }
}

const styles = {
  inputArea: {
    margin: "0 auto",
    maxWidth: "500px"
  },
  label: {
    fontSize: "14px",
    textAlign: "left"
  },
  input: {
    fontSize: "14px",
    width: "100%"
  },
  btnSubscribe: {
    display: "inline-block"
  },
  starChar: {
    position: "absolute",
    right: "30px",
    top: "4px",
    color: "#c60",
    fontSize: "30px",
    zIndex: 20
  }
};
