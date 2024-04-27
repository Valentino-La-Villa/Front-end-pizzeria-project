import { Skeleton } from '@mui/material'
import maps from '../../../assets/icons/maps.png'
import { Fragment } from 'react'

export default function LoadingScreenForBranchesPage() {
    
    const determineSide=(index)=>{
        if (index % 2 != 0) {
            return {
                display: 'flex',
                flexDirection: 'row-reverse',
                textAlign: 'end',
            }
        }
    }

    const display = [0, 1].map((index)=><Fragment key={index}>


        <hr className='my-3' />

        <div className="row justify-content-center p-1" style={determineSide(index)}>
            <div className='col-6 col-lg-4'>
                <Skeleton width='100%' height='500px' variant='rectangular' className='mt-4' />
                <img className="img-fluid" src='' alt="" />
            </div>

            <div className="col branches--custom justify-content-center d-flex flex-column ">
                <h3 className="text-success"><b><Skeleton className='bg-success d-inline-block' width='300px'/></b></h3>
                <p style={{...determineSide(index), alignItems: 'center', gap: '5px'}}><Skeleton width='80px' className='d-inline-block' /><img style={{height: '2vh', marginBottom: '3px'}} src={maps}/></p>
                <h5><Skeleton className='bg-primary d-inline-block' width='100px' /> </h5>
            </div>
        </div>

    </Fragment>)
    return (
        <div>
            {display}
        </div>
    )
}