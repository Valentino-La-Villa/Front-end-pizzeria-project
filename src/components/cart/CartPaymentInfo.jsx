import React from "react"
import { Tooltip } from 'react-tooltip'
import { useDispatch, useSelector } from "react-redux"
import { deliverOrderToDatabase } from "../../redux/slices/productHandlingSlice"

export default function CartPaymentInfo({totalPrice}) {

    const cart = useSelector(state => state.productHandling.cart)
    const branches = useSelector(state => state.branches.branches.data)

    const dispatch = useDispatch()

    const [formData, setFormData] = React.useState({
        deliveryAddress: '',
        deliveryBranch: false,
    })

    const branchesDropdown = branches.map(branch => {return (
        <option value={branch.name} key={branch.id}>
            {branch.city}, {branch.state_twoLetterFormat}
        </option>
    )})
    
    const handleFormSubmit =(event)=>{                              // In a full project this information would go straight to back-end to be processed and directed to the restaurant
        event.preventDefault()
        const location = branches.find(branch => branch.name == formData.deliveryBranch)
        const cartJson = cart.map(productOnCart => `${productOnCart.name}: ${productOnCart.amount} ordered`)

        dispatch(deliverOrderToDatabase({
            address: formData.deliveryAddress,
            location: location.name,
            price: totalPrice,
            cartJson: cartJson,
        }))
    }

    const handleInputChange =(event)=> {setFormData(prev => (
        {
            ...prev,
            [event.target.id]: event.target.value
        }
    ))}

    const getTotalPriceDisplay =()=>{
        try {
            return totalPrice.toFixed(2)
        } catch(error) {
            return (totalPrice)
        }
    }

    const totalPriceDisplay = getTotalPriceDisplay()

    const submitButtonValidation = (formData.deliveryAddress && formData.deliveryBranch)

    return (
        <div className="col-12 d-flex justify-content-center " style={{maxWidth: '800px'}}>
            <form onSubmit={handleFormSubmit} className="row container bg-success text-white rounded px-2 py-4 d-flex gap-4">
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
                                <p>The cost of your order is <span className="fw-bold bg-light p-1 text-success border-1 border border-black">${totalPriceDisplay}</span></p>
                            </div>

                            <div className="d-flex align-items-center">
                                <div
                                data-tooltip-id="place-order-disabled"
                                data-tooltip-place="top">
                                    <button disabled={!submitButtonValidation} className="btn btn-outline-light" style={{width: '100%', maxWidth: '180px'}}>Place your order</button> 
                                </div>
                            </div>

                            {submitButtonValidation ? 
                                <></> 
                                : 
                                <Tooltip id="place-order-disabled">
                                    <div className="d-flex flex-column">
                                        <b>Before submitting your order you must first:</b>
                                        <span>Select the branch that will be delivering your pizza: {formData.deliveryBranch ? <>✅</> : <>❌</>}</span>
                                        <span>Write down your address: {formData.deliveryAddress ? <>✅</> : <>❌</>}</span>
                                    </div>
                                </Tooltip>
                            }
                        </div>
                    </form>
        </div>
    )
}