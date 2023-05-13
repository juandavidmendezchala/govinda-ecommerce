import CarWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar(){
    return(
        <>
        <div>
        <ul className="navbar">
            <Link to=''>
            <h2 className="navbar-brand">Govinda Ecommerce</h2>
            </Link>
            <ul className="navbar">
                <Link to='/buynow'>
                <li className="navbar-link">Buy Now!</li>
                </Link>
                <Link to={`/buynow/category/Easy`}>
                <li className="navbar-link">Easy</li>
                </Link>
                <Link to={`/buynow/category/Intermediate`}>
                <li className="navbar-link">Intermediate</li>
                </Link>
                <Link to={`/buynow/category/Difficult`}>
                <li className="navbar-link">Difficult</li>
                </Link>
                
                <div className="carticon">
                <CarWidget ></CarWidget>
                </div>                
            </ul>
        </ul>
        </div>
        

        </>
    )
}