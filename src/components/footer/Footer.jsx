import React from "react";

export default function Footer() {
    return (
        <footer className="container-fluid bg-black text-white mt-3">
            <div className="row">
                <div className="col-6 p-2 
                                d-flex justify-content-start align-items-center text-start">
                    John's Pizzeria™ all rights reserved.
                </div>

                <div className="col-6 p-2
                                d-flex flex-column align-items-end text-end">
                    <p>Business address:</p>
                    <p>Wainwright ave. 9999, Phoenix - AZ - USA.</p>
                </div>
            </div>
        </footer>
    )
}