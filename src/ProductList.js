import React, { Component } from "react";
// import {storeProducts,detailsProduct} from "./Data";
import Product from "./Product";
import {ProductConsumer} from "./Context";
export default class ProductList extends Component{
    // state={
    //     products:storeProducts,
    //     x:detailsProduct
    // }
    render(){
        // console.log(detailsProduct)
        return(
            <>
            <section className="bg-light">
            <div className="container">
                <div className="title py-5">
                    <h1 className="text-center">Our <strong className="text-muted">Products</strong></h1>
                </div>
                <div className="row">
                <ProductConsumer>
                    {(value)=>{
                        return value.products.map((product)=>{
                            return <Product key={product.id} product={product}/>
                        })
                    }}
                </ProductConsumer>
                </div>
            </div>
            </section>
            </>
        )
    }
}