import { useRef, useCallback } from "react";
import Swal from "sweetalert2";
import Axios from 'axios'

export default function Contact() {

    const contactFormName = useRef()
    const contactFormEmail = useRef()
    const contactFormTopic = useRef()
    const contactFormMessage = useRef()

    const handleContactFormSubmit = useCallback((event)=> {
        event.preventDefault()

        const data = {
            contactFormName: formName?.current?.value,
            contactFormEmail: formEmail?.current?.value,
            contactFormTopic: formTopic?.current?.value,
            contactFormMessage: formMessage?.current?.value
        }

        const validateData=(data)=> {
            const emailCheck = /\w@\w/
            if (!(Object.values(data).filter(value => value != '').length === 4)) { // Checking to see if any input is empty
                console.log('first')
                return { res: false, err: 'emptyInputs' } // Returning an object to be able to identify the error type and customize the alert popup in the next function
            }
            else if (!emailCheck.test(data.formEmail)) { // Checking for valid email submissions
                console.log('hello')
                return { res: false, err: 'invalidEmail' }
            }
            else return { res: true }
        }

        const dataValidation = validateData(data)
        
        if (!!dataValidation.res) {
            Axios.post('https://jsonplaceholder.typicode.com/posts', data) // The brand's custom database would go here
            
            console.log('Data sent to server: ', data)

            Swal.fire({
                icon: 'success',
                title: 'Thank you for your message!',
                text: 'Our team will be reviewing your submission, and, if needed, will contact you through the email provided.'
            }
            )
        }
        else {
            const textVar = dataValidation.err === 'invalidEmail' ? // Customizing the error message for better UX
                'Provided email is invalid, try again!'
                :
                'You need to properly fill out all fields before hitting send!'

            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: textVar
            })
        }
    })

    return (
        <main className="container-fluid my-5 text-center w-100">
            
            <h3>You can find our administrative offices at Wainwright ave. 9999, Phoenix, Arizona</h3>

            <i className="text-secondary">Or you can leave us your message right here</i>

            <form onSubmit={handleContactFormSubmit} className="container-fluid my-5 justify-content-center d-flex"
            > 
                
                <div className="col-12 col-md-8 col-lg-7 col-xl-6 row d-flex gap-1 px-3 px-sm-5 py-5 rounded-2 border border-secondary bg-light">
                    
                    <label htmlFor="contactForm__name" className="contactSection__text">Your name</label>
                    <input ref={contactFormName}
                    style={{backgroundColor: '#d9e3f2'}} className="border border-1 border-secondary mb-4 form-control text-black" type="text" />

                    <label htmlFor="contactForm__email" className="contactSection__text">Your email</label>
                    <input ref={contactFormEmail}
                    style={{backgroundColor: '#d9e3f2'}} className="border border-1 border-secondary mb-4 form-control text-black" type="text" />

                    <label htmlFor="contactForm__topic" className="contactSection__text">Topic</label>
                    <input ref={contactFormTopic} 
                    style={{backgroundColor: '#d9e3f2'}} className="border border-1 border-secondary mb-4 form-control text-black" id="contactForm__topic" type="text" />

                    <label htmlFor="contactForm__message" className="contactSection__text">Your message</label>
                    <textarea ref={contactFormMessage} 
                    style={{backgroundColor: '#d9e3f2'}} className="border border-1 border-secondary mb-4 form-control text-black" id="contactForm__message" />
                    
                    <div className="col-12 d-flex justify-content-end p-0">
                        <button className="btn btn-outline-dark col-5 col-sm-3">Submit</button>
                    </div>
                </div>

            </form>
        </main>
    )
}