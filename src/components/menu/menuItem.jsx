import shoppingCart from '../../assets/icons/shopping-cart-plus.svg'
import veganLogo from '../../assets/icons/vegan.png'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/productHandlingSlice'
import { getFinalPriceForSingleUnit } from '../../utilities/miscFunctions'

export default function MenuItem(props) {

    
    const dispatch = useDispatch()
    const add =(providedId)=> dispatch(addToCart({id: providedId}))
    
    const price = props?.priceUSD.toFixed(2)
    const finalPrice = getFinalPriceForSingleUnit(props.id)

    const handleAddItemToList=(event)=>{ // Planing to implement the selection of extra toppings, opt-out of ingredients and choices of sauce on pasta.
        Swal.fire({
            title: `Adding ${props?.name} to cart`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        }).then(result => {
            if (result.isConfirmed) {
                add(props.id)
            }
        })
    }
    
    return (
            <div className="card" style={{width: '250px', minHeight: '330px'}}>
                <img src={props.imgURL} className="card-img-top card--custom-img" alt="" />
                <div className="card-body d-flex justify-content-between flex-column">
                    <div className="d-flex flex-column mb-3" // Displayed in two in-block flexboxes because of the button going at the end.
                    > 
                        <h5 className="card-title" style={{marginBottom: '3px'}}>{props?.name} {props?.vegan && 
                        <img src={veganLogo} style={{width: '15px'}}/>}</h5>
    
                        {props?.discount ? 
    
                        <div                                       // Discount display - flex is used in p to level the vertical centerpoints of all three spans
                        >
                            <p className="card-text mb-2 mt-2 d-flex">
                                <span style={{textDecoration: 'line-through'}}>${price}</span>
                                <span className="ms-1"> → <span className='text-success fw-bold'>${finalPrice}</span></span>
                                <span className="ms-2 bg-danger p-1 rounded-1 text-white" style={{fontSize: '12px'}}>{props?.discount}% OFF!</span>
                            </p>
                        </div> :
                        
                        <p className="card-text mb-2 text-success fw-bold">${price}</p> // Normal display if no discount is applied
                        }
    
                        <p className="card-text">{props?.description}</p>
                    </div>

                    <button onClick={handleAddItemToList} className="btn btn-outline-success card--custom-button" id={props.id}>
                        <img style={{pointerEvents: 'none'}} src={shoppingCart} alt=""/>
                    </button>
                </div>
            </div>
    )

}