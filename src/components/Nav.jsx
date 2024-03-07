import React from "react";
import { Link, NavLink } from "react-router-dom";
import burgerMenuIcon from '../assets/icons/burgerMenuIcon.svg'
import burgerMenuCloseX from '../assets/icons/burgerMenuCloseX.svg'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

export default function Navbar() {

    const [burgerMenuVisibility, setBurgerMenuVisibility] = React.useState(false)
    const dynamicBurgerMenuClassname = (burgerMenuVisibility ? 'nav--burgerMenu--visible' : 'nav--burgerMenu--hidden') // Css configs for burger menu are handled in index.css instead of bootstrap

    
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



        <nav                                                        // Burger menu display for -1200px / hidden in higher res
        className="col-3
                   col-sm-2
                   d-xl-none 
                   d-flex nav--burgerMenu-list-container justify-content-end ">

            

            <ClickAwayListener onClickAway={()=>{setBurgerMenuVisibility(false)}}>
                <div className="m-0 p-0 d-flex">
                    <button className="btn p-0" onClick={()=>{setBurgerMenuVisibility(true)}}>
                        <img className="img-fluid" style={{width: '50px'}} src={burgerMenuIcon}></img>
                    </button>

                    <main className={dynamicBurgerMenuClassname}>
                        <ul className="nav--burgerMenu-list">
                            <li>
                                <button className="btn p-0" onClick={()=>{setBurgerMenuVisibility(false)}}>
                                    <img className="img-fluid" style={{width: '30px'}} src={burgerMenuCloseX}></img>
                                </button>
                            </li>
                            <li>
                                <NavLink className={defineStyle} to={'/'}>Home</NavLink>
                            </li>
                            
                            <li>
                                <NavLink className={defineStyle} to={'/about'}>About</NavLink>
                            </li>

                            <li>
                                <NavLink className={defineStyle} to={'/products'}>Products</NavLink>
                            </li>

                            <li>
                                <NavLink className={defineStyle} to={'/branches'}>Branches</NavLink>
                            </li>
                            
                            <li>
                                <NavLink className={defineStyle} to={'/contact'}>Contact</NavLink>
                            </li>
                        </ul>
                    </main>
                </div>
            </ClickAwayListener>
        </nav>
        </>
    )
}