import { Fragment } from 'react'
import shoppingCart from '../../../assets/icons/shopping-cart-plus.svg'
import { CircularProgress, Skeleton } from '@mui/material'

export default function LoadingScreenForProductsPageRow() {
    const display = [1, 2, 3, 4].map((index)=> 
    
    <div key={index} className="mt-4 d-flex justify-content-center 
    col-xl-3
    col-md-4
    col-sm-6">
    
        <div className="card" style={{width: '250px', height: '330px'}}>
            <div src='' className="d-flex justify-content-center align-items-center card-img-top card--custom-img bg-success border" alt="">
                <CircularProgress className='text-warning' />
            </div>

            <div className="card-body d-flex justify-content-between flex-column">
                <div className="d-flex flex-column mb-3"> 
                    <h5 className="card-title" style={{marginBottom: '3px'}}><Skeleton width='150px' height='20px'/></h5>

                    <p className="card-text mb-2"><Skeleton className="bg-success" width='40px' height='25px'/> </p>

                    <p className="card-text"><Skeleton height='10px' /> <Skeleton height='10px'/> <Skeleton height='10px'/></p>
                </div>

                <button className="btn btn-outline-success card--custom-button" onClick={(e)=>{e.preventDefault()}}>
                    <img style={{pointerEvents: 'none'}} src={shoppingCart} alt=""/>
                </button>
            </div>
        </div>
    </div>)

    return (
        <Fragment>
            {display}
        </Fragment>
    )
}