import React from "react";
import brandLogo from '../../assets/brand-logo.png'
import Navbar from "./Nav";
import squareLogo from '../../assets/icons/Stretched-logo.png'

export default function Header() {
    return (
        <>
        <header className="container-fluid bg-warning p-2 vh-10 position-fixed shadow" style={{zIndex: '99'}}>
            <div className="row">
                <div className="d-none
                                d-sm-block col-1">
                    <img className="img-fluid" src={brandLogo} alt="" style={{height: '10vh', minWidth: '10vh'}} />
                </div>

                <div className="col-3
                                col-sm-1 
                                col-xl-3" // Empty div for balancing out logo size and centering the next element
                                >
                </div>


                <div className="col-6
                                col-sm-8
                                col-xl-4 
                text-center my-auto">
                    <img className="col-12" style={{maxWidth: '300px'}} src={squareLogo} alt="" />
                </div>

                <Navbar/>
            </div>
        </header>
        
        <div id='header' className="vh-10" style={{minHeight: '12vh'}}              // KEEP THIS DIV EMPTY - It's an empty box with about the same size as the Header placed to occupy the block-space that Header does not occupy due to using the 'fixed' property
        ></div>
        </>
    )
}