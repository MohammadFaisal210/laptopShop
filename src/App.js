import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Details from "./Details";
import "./index.css";
import Modal from "./Modal";

const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/details" component={Details}/>
      </Switch>
      <Modal/>
    </>
  )
}
export default App;