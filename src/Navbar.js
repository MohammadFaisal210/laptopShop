import React from "react";
import {Link} from "react-router-dom";
import LaptopChromebookSharpIcon from '@material-ui/icons/LaptopChromebookSharp';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import "./index.css"
function Navbar () {
    return(
<>

<nav className="nav bg-dark py-2 ">
<div className="container ">
            <Link to="/" className="text-decoration-none">
                <h4 className="d-inline  text-white pr-md-5"><LaptopChromebookSharpIcon/></h4>
            </Link>
            <Link to="/" className="text-decoration-none">
                <h4 className="d-inline text-white pl-4 ">Our Products</h4>
            </Link>            
            <Link to="/cart">
                <button className="btn btnStyle btn-outline-light d-inline text-white float-right pr-md-5"><AddShoppingCartSharpIcon/>Cart</button>
            </Link>
</div>
</nav>
</>
    )
}
export default Navbar;