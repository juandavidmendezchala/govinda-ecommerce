import CarWidget from "../CartWidget/CartWidget";
import './navbar.css'

export default function Navbar(){
    return(
        <>
        <div>
        <ul className="navbar">
            <h2 className="navbar-brand">Govinda Ecommerce</h2>
            <ul className="navbar">
                <li className="navbar-link">Buy Now!</li>
                <div className="carticon">
                <CarWidget ></CarWidget>
                </div>                
            </ul>
        </ul>
        </div>
        

        </>
    )
}