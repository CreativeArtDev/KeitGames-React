import React, { Component } from "react";

export default class HomeItem extends Component {
  render() {
		const pass = this.props.label;
		const breaker = pass.split(':');
		const pref = breaker[0];
		const suff = breaker[1];
    return (
      <div>
        <div style={style}>
				{breaker.length===0?<div>{this.props.label}</div>:<div>{pref + ":"}<br/>{suff}</div>}
          <a href={this.props.link} className={this.props.styles}>
            {this.props.button}
          </a>
        </div>
      </div>
    );
  }
}

const style = {
  marginTop: "40px"
};
