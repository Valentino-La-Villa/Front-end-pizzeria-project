import React from "react";
import ourSpecialties from '../../assets/icons/Our-specialties.png'
import ourAlternatives from '../../assets/icons/Our-alternatives.png'
import shoppingCart from '../../assets/icons/shopping-cart-fill-white.png'
import MenuItem from "./menuItem";
import { Toast, ToastContainer } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingScreenForProductsPageRow from "./loadingScreens/ProductsRowLS";

export default function Products() {

    const state = useSelector(state => state.productHandling)
    const cart = state.cart
    const productsFetchStatus = state.products.status

    const pizzaList = state.products.data.pizza
    const othersList = state.products.data.other
    
    const getItemDisplay=(itemList)=> itemList.map(item => {
        return (
            <div key={item.id} className="mt-4 d-flex justify-content-center 
                                       col-xl-3
                                       col-md-4
                                       col-sm-6">
            <MenuItem {...item} />
        </div>
        )
    })

    let pizzaListDisplay = [<LoadingScreenForProductsPageRow key={1} />, <LoadingScreenForProductsPageRow key={2} />]
    let othersListDisplay = <LoadingScreenForProductsPageRow />
    if (productsFetchStatus == 'fulfilled') {
        pizzaListDisplay = getItemDisplay(pizzaList)
        othersListDisplay = getItemDisplay(othersList)
    }


    return (
        <main className="container-xxl mt-2 mb-5 py-4" style={{placeItems: 'center'}}>

            <div className="col-12 d-flex justify-content-center">
                <img className="col-9 col-sm-6 col-md-5 col-lg-4" src={ourSpecialties} alt=""/> 
            </div>
            
            <div className="row mb-5 d-flex justify-content-center">
                {pizzaListDisplay}
            </div>

            <div className="col-12 d-flex justify-content-center">
                <img className="col-9 col-sm-6 col-md-5 col-lg-4" src={ourAlternatives} alt="" />
            </div>
            <div className="row mb-5">
                {othersListDisplay}
            </div>

            {cart.length >= 1 ?  // This toast ('Go to cart' popup) will only be shown when the cart has items inside it

            <ToastContainer
            containerPosition="fixed"
            position="bottom-center"
            bsPrefix="mb-3 col-11 d-flex justify-content-center">
                <Toast
                bg='primary'>
                    <Toast.Body>
                        <Link className="text-white text-decoration-none" to='/cart'><img style={{width: '20px'}} src={shoppingCart} className="rounded me-2" alt="" />
                        <span>Your cart</span></Link>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            :
            false}
            
            

        </main>
    )
}