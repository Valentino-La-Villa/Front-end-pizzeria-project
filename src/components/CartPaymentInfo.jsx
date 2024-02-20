import { useBranchContext, useShoppingCartContext } from "./ContextProvider"
import React from "react"
import Swal from "sweetalert2"
import { nanoid } from "nanoid"
import {useNavigate} from 'react-router-dom'

export default function CartPaymentInfo({totalPrice}) {

    const {branches} = useBranchContext()
    const {shoppingList, setShoppingList} = useShoppingCartContext()
    const navigate = useNavigate()

    const [formData, setFormData] = React.useState({
        deliveryAddress: '',
        deliveryBranch: false,
    })

    const branchesDropdown = branches.map(branch => {return (
        <option value={branch.id} key={branch.id}>
            {branch.city}, {branch.state_twoLetterFormat}
        </option>
    )})
    
    const handleFormSubmit =(event)=>{                              // In a full project this information would go straight to back-end to be processed and directed to the restaurant
        event.preventDefault()
        const location = branches.find(branch => branch.id == formData.deliveryBranch)
        const locationDisplay = `${location.city}, ${location.state_twoLetterFormat}`
        const orderID = nanoid()

        console.log(`Processed incoming order with the following details:
        Delivery address: ${formData.deliveryAddress}
        Location: ${locationDisplay}
        Total price: $${totalPrice}
        Order:`, shoppingList, ` 
        Order ID: ${orderID}`)

        Swal.fire({
            title: `Your order has been placed!`,
            icon: 'success',
            text: `It will be delivered at ${formData.deliveryAddress} - ${locationDisplay}`,
            footer: `The ID of your order is: <b>${orderID}</b>`,
            timer: 5000,
            timerProgressBar: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        }).then(() => {
                navigate('/')
                setShoppingList([]) // This will only clear the shopping list once the popup expires, so that the items don't immediately dissapear when they click the form submit
            }
        )
    }

    const handleInputChange =(event)=> {
        setFormData(prev => {
            return (
                {
                    ...prev,
                    [event.target.id]: event.target.value
                }
            )
        })
    }

    const getTotalPriceDisplay =()=>{
        try {
            return totalPrice.toFixed(2)
        } catch(error) {
            return (totalPrice)
        }
    }

    const totalPriceDisplay = getTotalPriceDisplay()

    const shouldSubmitButtonBeClickable = (formData.deliveryAddress && formData.deliveryBranch) ? 
        <button className="btn btn-outline-light" style={{width: '100%', maxWidth: '180px'}}>Place your order</button> 
        :
        <button disabled className="btn btn-outline-light" style={{width: '100%', maxWidth: '180px'}}>Place your order</button>

    return (
        <div className="col-12 d-flex justify-content-center " style={{maxWidth: '800px'}}>
            <form onSubmit={handleFormSubmit} className="row container bg-success text-white rounded px-2 py-4 d-flex gap-2">
                        <div className="col-12 d-flex gap-3">
                            <input id="deliveryAddress" value={formData.deliveryAddress} onChange={handleInputChange}
                            type="text" placeholder="Your address" className="col-6 col-sm-5 col-md-4 col-lg-3"/>
                            
                            <div className="col-6 col-sm-7 col-md-8 col-lg-9 d-flex justify-content-end">

                                <select id="deliveryBranch" value={formData.deliveryBranch} onChange={handleInputChange}
                                className="form-select btn-outline-light btn me-3" style={{maxWidth: '180px'}} aria-label="Default select example">
                                    <option defaultValue={false} value={''}>Location</option>
                                    {branchesDropdown}
                                </select>
                            </div>
                        </div>

                        <div className="w-100 align-items-center d-flex justify-content-between 
                                        col-12">
                            <div>
                                <p>The cost of your order is ${totalPriceDisplay}</p>
                            </div>

                            {shouldSubmitButtonBeClickable}
                        </div>
                    </form>
        </div>
    )
}