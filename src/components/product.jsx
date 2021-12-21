// import { Link } from "react-router-dom"
import "./styles/product.css"
import { javascript } from "../images/index"
import { useLocation } from "react-router-dom"

const Product = props => {
    const {state} = useLocation();
    console.log(state)
    return (
        <div className="product">
            <header className="product-header"><h1>Purchase <span id="product-head-style">details</span></h1></header>
            <main className="product-container">
                <h3 className="product-title">{state.name}</h3>
                <div className="product-exact">
                    <img className="product-image" src={javascript} alt="" />
                    <div className="product-exact-detail">
                        <p id="product-price">Q <select name="Quantity" id="product-quantity">
                            {[1, 2, 3, 4, 5].map((i, k) => {
                                return <option className="product-quantity-option" key={k}>{i}</option>
                            })}
                        </select></p>
                        <div>
                            <h4>{state.price}</h4>
                            <p id="product-price">Rs. 2500. 00</p>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    )
}
export default Product