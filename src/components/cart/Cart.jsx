
import React from "react"
import CartPaymentInfo from "./CartPaymentInfo"
import { useSelector } from "react-redux"
import { getFinalPriceForEntireCart, getFinalPriceForSingleProduct } from "../../utilities/miscFunctions"
import IndividualCartItem from './IndividualCartItem.jsx'

export default function Cart() {

    const cart = useSelector(state => state.productHandling.cart)

    const cartItems = cart.map(item => {
        return (
            <IndividualCartItem key={item.id} item={item} />
        )
    })

    let totalPrice = getFinalPriceForEntireCart()

    return (
        <div className="container mt-5">
            <div className="col-12 d-flex justify-content-center mb-2">
                <CartPaymentInfo
                totalPrice={totalPrice} />
            </div>

            {cartItems}
        </div>
    )
}