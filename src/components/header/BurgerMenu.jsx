import { NavLink } from 'react-router-dom';
import burgerMenuIcon from '../../assets/icons/burgerMenuIcon.svg'
import burgerMenuCloseX from '../../assets/icons/burgerMenuCloseX.svg'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import React from 'react';

export default function BurgerMenu({defineStyle}) {
    
    const [burgerMenuVisibility, setBurgerMenuVisibility] = React.useState(false)
    const dynamicBurgerMenuClassname = (burgerMenuVisibility ? 'nav--burgerMenu--visible' : 'nav--burgerMenu--hidden')
                    
    return (
    
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
                        <NavLink className={defineStyle} to={'/'} style={{fontSize: '30px'}}>Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink className={defineStyle} to={'/about'} style={{fontSize: '30px'}}>About</NavLink>
                    </li>

                    <li>
                        <NavLink className={defineStyle} to={'/products'} style={{fontSize: '30px'}}>Products</NavLink>
                    </li>

                    <li>
                        <NavLink className={defineStyle} to={'/branches'} style={{fontSize: '30px'}}>Branches</NavLink>
                    </li>
                    
                    <li>
                        <NavLink className={defineStyle} to={'/contact'} style={{fontSize: '30px'}}>Contact</NavLink>
                    </li>
                </ul>
            </main>
        </div>
    </ClickAwayListener>
    )
}