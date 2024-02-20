import React from "react";
import Swal from "sweetalert2";

export default function Contact() {

    const handleSubmit =(event)=> { // Pending implementation: upload submissions to firebase / cloudfire
        event.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Thank you for your message!',
            text: 'Our team will be reviewing your submission, and, if needed, will contact you through the email provided.'
        }
        )
    }

    return (
        <main className="container my-5 text-center">
            <h3>You can find our administrative offices at Wainwright ave. 9999, Phoenix, Arizona</h3>

            <i className="text-secondary">Or you can leave us your message right here</i>

            <form onSubmit={handleSubmit} className="container-fluid my-5 justify-content-center d-flex" // Since this is a simple form implementation meant to be written in its entirety before being sent I think? it doesn't need to be tampered-with by React.
            > 
                
                <div className="col-12 col-xl-5 row">
                    
                    <label htmlFor="contactForm__name">Your name</label>
                    <input className="mb-4" id="contactForm__name" type="text" />

                    <label htmlFor="contactForm__email">Your email</label>
                    <input className="mb-4" id="contactForm__email" type="text" />

                    <label htmlFor="contactForm__topic">Topic</label>
                    <input className="mb-4" id="contactForm__topic" type="text" />

                    <label htmlFor="contactForm__message">Your message</label>
                    <textarea className="mb-4" id="contactForm__message" />
                    
                    <div className="col-12 d-flex justify-content-end p-0">
                        <button className="btn btn-dark col-3">Submit</button>
                    </div>
                </div>

            </form>
        </main>
    )
}