import { useDispatch } from 'react-redux'
import trashCan from '../../assets/icons/trash-can-red.png'
import { getFinalPriceForSingleProduct } from '../../utilities/miscFunctions'
import Swal from 'sweetalert2'
import { removeAllInstancesFromCart } from '../../redux/slices/productHandlingSlice'

export default function IndividualCartItem({item}) {
    
    const dispatch = useDispatch()
    const removeAll =(id)=> dispatch(removeAllInstancesFromCart(id))

    const handleRemoveItemFromShoppingList=(event, name)=> {
        Swal.fire({
            title: `Removing ${name} from cart, are you sure?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        }).then(result => {
            if (result.isConfirmed) {
                removeAll(event.target.id)
                Swal.fire({
                    icon: 'success',
                    title: `Removed ${name} from cart!`})
            }
        })
    }

    const finalIndividualPrice = getFinalPriceForSingleProduct(item.id)

        return (
            <div
            key={item.id}
            className="col-12 d-flex justify-content-center "
            >
                <div className="card mb-3 col-12" style={{maxWidth: '800px', maxHeight: '270px'}}>
                    <div className="row g-0">

                        <div className="col-4 overflow-hidden">
                            <img src={item.imgURL} style={{height: '150px', objectFit: 'cover', width: '100%'}} className="img-fluid rounded-start" alt="..."/>
                        </div>


                        <div className="col-6">
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-between">{item.name}</h5>

                                <p className="card-text overflow-hidden" style={{fontSize: '13px', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{item.description}</p>
                                <p className="card-text mt-3 d-flex align-items-center" // Discount display - flex is used in p to level the vertical centerpoints of all three spans
                                >
                                    <span className="text-success fw-bold">${finalIndividualPrice.toFixed(2)}</span>
                                    {item?.discount &&
                                    <span className="ms-2 bg-danger p-1 rounded-1 text-white" style={{fontSize: '12px'}}>{item.discount}% OFF!</span>}
                                </p>
                            </div>
                        </div>

                        <div className="col-2 p-3 text-end d-flex flex-column justify-content-between">
                            <h5><span className="bg-body-secondary border border-black px-2">{item.amount}</span></h5>
                            <div>
                                <img src={trashCan} alt=""
                                style={{cursor: 'pointer', height: '20px'}}
                                id={item.id}
                                className="me-1"
                                onClick={()=>{handleRemoveItemFromShoppingList(event, item.name)}} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
}