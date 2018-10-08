import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      fname: '',
      formErrors: {email: '', fname: ''},
      emailValid: false,
      fnameValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  handleSubscribe = () => {
   console.log("Phiiiii")
}
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let fnameValid = this.state.fnameValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      // case 'fname':
      //   fnameValid = value.length >= 6;
      //   fieldValidationErrors.fname = fnameValid ? '': ' is too short';
      //   break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    fnameValid: fnameValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.fnameValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm" onSubmit={this.submitForm} >
        {/* <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div> */}
        <div style={{ textAlign: "center", fontSize: "19.6px" }}>
          Be the 1st to hear about new Apps:
        </div>
        <div
            className="col-md-12"
            style={{
              width: "100%",
              textAlign: "right",
              fontSize: "12px",
              marginTop: "16px"
            }}
            >
            <span style={{ color: "#c60" }}>*</span>
            indicates required
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control input-field" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
            <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group`}>
          <label htmlFor="fname">First Name</label>
          <input type="text" className="form-control input-field" name="fname"
            placeholder="First Name"
            value={this.state.fname}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" onClick={this.emailValid} className="testbutton" disabled={!this.state.formValid}>Subscribe</button>
      </form>
    )
  }
}

export default Form;