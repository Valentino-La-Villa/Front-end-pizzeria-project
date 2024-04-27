import HomeCarousel from "./HomeCarousel"
import SocialMediaButtons from "./SocialMediaButtons"
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <main className="container px-3 mt-5">
            <section className="col-12 d-flex justify-content-center gap-3">
                <div className="col-6">
                    <HomeCarousel />
                </div>
                
                <aside className="col-6 text-end d-flex flex-column gap-4 justify-content-between" style={{height: '50vh'}} // This height is used for both the Carousel Slideshow and the <aside/>, it must match the one used inside <HomeCarousel /> - it needs to be hard-coded as a string, for unknown reasons it wont work if it's passed as a prop
                > 
                    <div>
                        <h1>Welcome to <b className="text-danger">John's Pizzeria</b></h1>
                        <h6>Where passion for pizza meets <i>unparalleled</i> taste</h6>
                    </div>

                    <div>
                        <h3>Open through the week!</h3>
                        <h6>6PM - 1AM on all our branches</h6>
                        <h6><Link to={'/branches'}>Make your reservation</Link></h6>
                    </div>
                </aside>
            </section>
             
            <div className="col-12 mt-5 d-flex align-items-center flex-column">
                <h5>Follow us on social media!</h5>
                <SocialMediaButtons />
            </div>
        </main>


    )
}