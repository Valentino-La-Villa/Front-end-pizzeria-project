import maps from '../../assets/icons/maps.png'

export default function Branch(props) {

    const determineSide=(index)=>{ // Function to alternate the sides of the image and text
        if (index % 2 != 0) {
            return {
                display: 'flex',
                flexDirection: 'row-reverse',
                textAlign: 'end',
            }
        }
    }

    const correctSide = determineSide(props.index)

    return (
        <div>
            <hr className='my-3' />

            <div className="row justify-content-center" style={correctSide}>
                <div className='col-6 col-lg-4'>
                    <img className="img-fluid" src={props?.associatedPicture} alt="" />
                </div>

                <div className="col branches--custom justify-content-center d-flex flex-column ">
                    <h3 className="text-success"><b>{props.city}{props?.state ? `, ${props.state}` : ''}</b></h3>
                    <p style={{...correctSide, alignItems: 'center', gap: '5px'}}>{props.address} <a href={props.mapsURL} target='_blank'><img style={{height: '2vh', marginBottom: '3px'}} src={maps}/></a></p>
                    <h5><a href={props?.reservationURL} target='_blank'>Make a reservation</a></h5>
                </div>
            </div>
        </div>
    )
}