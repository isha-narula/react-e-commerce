import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import {Route} from "react-router-dom";
import Modal from './components/Modal';
import Cart from './components/Cart/Cart';


class App extends Component {
  render() {
    return (
       <React.Fragment>
        <NavBar></NavBar>
        <Switch>
          <Route path = "/details" component={Details} />
          <Route path = "/cart" component={Cart} />
          <Route exact path = "/" component={ProductList} />
          <Route component={Default} />
        </Switch>
        <Modal/>
       </React.Fragment>
    );
  }
}

export default App;






