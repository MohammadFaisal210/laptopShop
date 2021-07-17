import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { ProductConsumer } from "./Context";
import "./index.css"
export default class Product extends Component {
    render() {
        const { id,img, info, price, inCart } = this.props.product;
        return (
            <>
                <div className="col-12 col-xxl-2 mx-auto col-lg-3 col-md-4 ">
                    <ProductConsumer>
                        {value => (<div className="card my-3 ">                       
                            <Link to="/details" onClick={()=>{
                                value.handleDetail(id)
                            }}>
                                <img className=" card-img-top" src={img} alt="product" />
                            </Link>
                            {/* <div className="btnWrp"> */}
                            <button
                                onClick={()=>{
                                   value.addToCart(id)
                                   value.openModal(id)
                               }}
                                id="cartBtn"
                                className="btn btn-outline-dark ml-auto mx-0"
                                style={{ width: "75px" }} disabled={inCart ? true : false} >
                                {inCart ? (<p className="mb-0" disabled>in Cart</p>

                                )
                                    :
                                    (<AddShoppingCartSharpIcon />)}
                            </button>
                            {/* </div> */}
                            <h4 className="pl-3">TK : {price}</h4>
                            <p className="text-muted text-center my-2"> {info} </p>
                        </div>)}
                    </ProductConsumer>
                </div>
            </>
        )
    }
}