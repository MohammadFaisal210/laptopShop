import React, { Component } from "react";
import {ProductConsumer} from "./Context";
import {Link} from "react-router-dom";
import "./index.css"
export default class Modal extends Component {
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal}=value;
                    const {img,title,price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                            <>

                        <section className="modal_main">
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-9 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h1>item added to cart</h1>
                                        <img src={img} alt="product" className="img-fluid" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">
                                            price : $ {price}
                                        </h5>
                                        <Link to="/">
                                            <button 
                                            onClick={()=>{
                                                closeModal()
                                            }}
                                            className="btn btn-outline-dark  my-2 mx-1">Continue Shopping</button>
                                        </Link>
                                        <Link to="/cart">
                                            <button 
                                            onClick={()=>{
                                                 closeModal()
                                            }} 
                                            className="btn btn-outline-success text-center">Go To Cart</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}