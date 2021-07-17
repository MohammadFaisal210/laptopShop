import React from "react";
import {Link} from "react-router-dom";
const CartTotal =({value})=>{
    const {cartSubtotal,cartTax,cartTotal,clearCart}=value;
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col=sm-8 text-right">
                        <Link to="/">
                            <button onClick={()=>{
                                clearCart()
                            }} className="btn btn-outline-danger">Clear Cart</button>
                        </Link>
                        <h5><span className="text-title">Subtotal :</span> <strong>tk {cartSubtotal} </strong> </h5>
                        <h5><span className="text-title">Tax :</span> <strong>tk {cartTax} </strong> </h5>
                        <h5><span className="text-title">Total :</span> <strong>tk {cartTotal} </strong> </h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartTotal;