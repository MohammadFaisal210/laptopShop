import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "./Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
export default class Cart extends Component {
    render() {
        return (
            <section className="container-fluid">
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return(
                                <>
                                    <div className="text-capitalize text-center my-3">
                                        <h1>Your <span className="text-muted">cart</span></h1>
                                    </div>
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotal value={value} />
                                </>
                            )
                        }
                        else {
                           return <EmptyCart />
                        }
                    }}
                </ProductConsumer>

            </section>
        )
    }
}