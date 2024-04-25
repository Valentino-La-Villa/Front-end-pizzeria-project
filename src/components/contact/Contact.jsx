import { useRef, useCallback } from "react";
import Swal from "sweetalert2";
import Axios from 'axios'

export default function Contact() {

    const formName = useRef()
    const formEmail = useRef()
    const formTopic = useRef()
    const formMessage = useRef()

    const handleSubmit = useCallback((event)=> {
        event.preventDefault()

        const data = {
            formName: formName?.current?.value,
            formEmail: formEmail?.current?.value,
            formTopic: formTopic?.current?.value,
            formMessage: formMessage?.current?.value
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
        <main className="container my-5 text-center">
            <h3>You can find our administrative offices at Wainwright ave. 9999, Phoenix, Arizona</h3>

            <i className="text-secondary">Or you can leave us your message right here</i>

            <form onSubmit={handleSubmit} className="container-fluid my-5 justify-content-center d-flex"
            > 
                
                <div className="col-12 col-xl-5 row">
                    
                    <label htmlFor="contactForm__name">Your name</label>
                    <input ref={formName}
                     className="mb-4" id="contactForm__name" type="text" />

                    <label htmlFor="contactForm__email">Your email</label>
                    <input ref={formEmail}
                     className="mb-4" id="contactForm__email" type="text" />

                    <label htmlFor="contactForm__topic">Topic</label>
                    <input ref={formTopic}
                     className="mb-4" id="contactForm__topic" type="text" />

                    <label htmlFor="contactForm__message">Your message</label>
                    <textarea ref={formMessage}
                     className="mb-4" id="contactForm__message" />
                    
                    <div className="col-12 d-flex justify-content-end p-0">
                        <button className="btn btn-dark col-3">Submit</button>
                    </div>
                </div>

            </form>
        </main>
    )
}