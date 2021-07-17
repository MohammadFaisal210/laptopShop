import React, { Component } from "react";
import {Link} from "react-router-dom";
import {ProductConsumer} from "./Context";
export default class Details extends Component{
    render(){
        return(
           <ProductConsumer>
               {value=>{
                   const {id, img,price,title,info,inCart,company} =value.detailsProduct;
                   return(
                       <div className="container">
                           <div className="row">
                               <div className="col-10 mx-auto text-center my-5 text-muted">
                                  <h1> {title}</h1>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-10 col-md-6 mx-auto">
                                   <img src={img} className="img-fluid detailImg" alt="product" />
                               </div>
                               <div className="col-10 col-md-6 mx-auto my-4">
                                   <h5 className="text-success mt-3 mb-2">  Call for more details.Please Call-01813949001</h5>
                                   <h3 className="">Model : {company}</h3>
                                    <h4 className="text-info">price : <strong>Tk</strong> {price} </h4>
                                    <p className="font-weight-bold mt-3 mb-0">Some info about product :</p>
                                    <p> {info} </p>
                               <div>
                                   <Link to="/">
                                       <button className="btn btn-outline-dark cartBtn">Back To Products</button>
                                   </Link>
                                   <button className="btn btn-outline-success cartBtn text-capitalize ml-1" 
                                   disabled={inCart?true:false}
                                   onClick={()=>{
                                       value.addToCart(id)
                                       value.openModal(id)
                                   }}
                                   >
                                       {inCart ? "inCart" : "add to cart"}
                                   </button>
                               </div>
                               </div>
                           </div>
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}