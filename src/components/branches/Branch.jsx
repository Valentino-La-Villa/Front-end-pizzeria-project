import maps from '../../assets/icons/maps.png'

export default function Branch(props) {

    return (
        <article className='branches__branch'>
            <hr className='my-3' />

            <div className="row justify-content-center">
                <div className='col-6 col-lg-4'>
                    <img className="img-fluid" src={props?.associatedPicture} alt="" />
                </div>

                <div className="col branches--custom justify-content-center d-flex flex-column ">
                    <h3 className="text-success"><b>{props.city}{props?.state ? `, ${props.state}` : ''}</b></h3>
                    <p className='branches__branch__address'>{props.address} <a href={props.mapsURL} target='_blank'><img style={{height: '2vh', marginBottom: '3px', marginRight: '5px'}} src={maps}/></a></p>
                    <h5><a href={props?.reservationURL} target='_blank'>Make a reservation</a></h5>
                </div>
            </div>
        </article>
    )
}