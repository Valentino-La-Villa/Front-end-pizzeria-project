import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom"
import { miscCarouselItems } from "../../data/carouselData"
import { useSelector } from "react-redux"

export default function HomeCarousel(mainContainerHeight) {
    
    const products = useSelector(state => state.productHandling.products.data.all)

    const miscSlides = miscCarouselItems
    const productsOnDiscount = products.filter(product => product.discount)

    let finalSlideshow = []
    if (productsOnDiscount.length > 0) {
        finalSlideshow = [miscSlides[0], ...productsOnDiscount, ...miscSlides.slice(1)]
    } else finalSlideshow = miscSlides

    const carouselItems = finalSlideshow.map(item => { // Tried rendering it as a separate component and it didn't work. Probably something to do with react-bootstrap
        return (
            <Carousel.Item key={item.id}>
                <Link to='/products'>

                    <img src={item?.imgURL} className="img-fluid overflow-hidden" style={{height: '50vh', width: '100%', objectFit: 'cover'}} alt="" />

                    {(item.caption || item.name) && // 'Only render the caption if there is text to be put inside it'
                    <Carousel.Caption>
                        {item.isMiscellaneousForCarousel ? // First caption will render non-discount (miscellaneous) slides. Non-discount slides need to be present so that the homepage has something to show whenever the restaurant has no discounts up.
                        <>
                            <h3><span className="bg-danger px-2 d-inline-block">{item?.caption}</span></h3> 
                            <p><span className="text-white px-2 d-inline-block" style={{backgroundColor: '#dc354691'}}>{item?.subcaption}</span></p>
                        </>
                        :                                  // Display needs to be inline block so that the padding scales down correctly on lower resolutions - The span is needed so that the background is only set around the actual text and not the entire block
                        <>
                            <h3><span className="bg-danger px-2 d-inline-block">{item?.discount}% OFF</span></h3>
                            <p className="text-white px-2 d-inline-block" style={{backgroundColor: '#dc354691'}}>{item?.name}</p>
                        </>}
                    </Carousel.Caption>}
                </Link>
            </Carousel.Item>
        )
    })


    return (
            <Carousel className="col-12 shadow border border-warning border-3">
                {carouselItems}
            </Carousel>
    )
}