import React from "react";
const CartItem=({item,value})=>{
    const {id,price,title,img,total,count}=item;
    const {increment,decrement,removeItem}=value;
    return(
        <>
    <div className="row my-4 align-items-center text-capitalize text-center">
        <div className="col-lg-2 col-10 mx-auto">
            <img src={img} className="img-fluid" alt="product" style={{width:"5rem",height:"5rem"}} />
        </div>
        <div className="col-lg-2 col-10 mx-auto">
           <span className="d-lg-none">Product : </span> {title}
        </div>
        <div className="col-lg-2 col-10 mx-auto my-lg-0 my-2">
        <span className="d-lg-none">Price : </span> {price}
        </div>       
         <div className="col-lg-2 col-10 mx-auto my-lg-0 my-2">
           <span className="btn btn-black" onClick={()=>{
               decrement(id)
           }}>-</span>
           <span className="btn btn-black">{count}</span>
           <span className="btn btn-black" onClick={()=>{
               increment(id)
           }}>+</span>
        </div>        
        <div className="col-lg-2 col-10 mx-auto my-lg-0 my-2">
           <button onClick={()=>{removeItem(id)}} className="btn btn-danger">delete</button>
        </div>
        <div className="col-lg-2 col-10 mx-auto">
           <strong>item total : tk {total}</strong>
        </div>
    </div>
        </>
    )
}
export default CartItem;