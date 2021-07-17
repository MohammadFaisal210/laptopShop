import React from "react";
const EmptyCart = () => {
    return (
        <>
            <div className="container-fluid d-none d-lg-block">
                <div className="row">
                    <div className="col-lg-2 col-10 mx-auto text-capitalize text-center">Products</div>
                    <div className="col-lg-2 col-10 mx-auto text-capitalize text-center">name of products</div>
                    <div className="col-lg-2 col-10 mx-auto text-capitalize text-center">price</div>
                    <div className="col-lg-2 col-10 mx-auto text-capitalize text-center">quantity</div>
                    <div className="col-lg-2 col-10 mx-auto text-capitalize text-center">remove</div>
                    <div className="col-lg-2 col-10 mx-auto text-capitalize text-center">total</div>

                </div>
            </div>
        </>
    )
}
export default EmptyCart;