import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
    
    const defineStyle = (({isActive})=> isActive ? 
    `text-decoration-none text-success defineNavbarFont
    fw-bold`
    :
    `text-decoration-none text-success defineNavbarFont`)

    return (
        <> 
        <nav                                                            // Nav display for +1200px / hidden in lower res
        className="col-xl-4 d-none d-xl-flex
        text-center h-100 my-auto d-flex gap-2 justify-content-evenly flex-wrap"> 
            <NavLink className={defineStyle} to={'/'}>
                <p>Home</p></NavLink>

            <NavLink className={defineStyle} to={'/about'}>
                <p>About</p></NavLink>

            <NavLink className={defineStyle}to={'/products'}>
                <p>Products</p></NavLink>

            <NavLink className={defineStyle} to={'/branches'}>
                <p>Branches</p></NavLink>

            <NavLink className={defineStyle} to={'/contact'}>
                <p>Contact</p></NavLink>
        </nav>



        <nav                                                       // Burger menu display for -1200px / hidden in higher res
        className="col-3
                   col-sm-2
                   d-xl-none 
                   d-flex nav--burgerMenu-list-container justify-content-end ">
                    <BurgerMenu
                    defineStyle={defineStyle} />
        </nav>
        </>
    )
}