import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";

import Home from "./containers/Home";
import Products from "./containers/Products";
import Contact from "./containers/Contact";
import Error from "./containers/Error/Error";
import Menu from './containers/Menu';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
