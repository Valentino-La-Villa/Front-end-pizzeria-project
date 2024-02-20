import React from "react";
import outdoors1 from '../assets/decoration/Outdoors1.png'
import oven from '../assets/decoration/Oven.png'
import table1 from '../assets/decoration/Table1.png'

export default function About() {
    return (
            <main className="container-md my-5">
                <div className="row text-center d-flex gap-5 about--custom p-0">
                    <h3>Welcome to <b className="text-danger">John's Pizzeria</b>, where passion for pizza meets <i>unparalleled</i> taste!</h3>

                    <div className="container row text-start align-items-center gx-5 p-0 mb-5">
                        <div className="col-5">
                            <img className="img-fluid" src={outdoors1} alt="" />
                        </div>
                        <p className="col-7 p-0 ps-2">At John's Pizzeria, we pride ourselves on crafting authentic, <i>mouthwatering</i> pizzas that capture the essence of traditional Italian flavors while embracing innovation and creativity.

                        Established with a commitment to excellence and a love for sharing delicious food with our community, we have become a beloved destination for pizza aficionados and casual diners alike.</p>
                    </div>

                    <div className="container row text-end align-items-center">
                        <p className="col-7">What sets us apart is our dedication to quality ingredients and time-honored techniques. Every pizza that leaves our kitchen is a labor of love, made with hand-stretched dough, premium cheeses, and the freshest locally-sourced toppings. Our signature sauce, perfected over years of experimentation, lends a rich and savory flavor that keeps our customers coming back for more.</p>
                        <img className="col-5" src={oven} alt="" />
                    </div>
                    
                    <p>But it's not just about the pizza. At John's Pizzeria, we believe in providing an exceptional dining experience from the moment you walk through our doors. Our warm and inviting atmosphere, coupled with friendly and attentive service, ensures that every visit is a memorable one.</p>
                    
                    <div className="container row gap-4 justify-content-center ">
                        <p>Whether you're indulging in a classic Margherita or exploring one of our specialty pies, such as the Meat Lover's or Veggie Delight, we guarantee that each bite will be a spark of greatness. And for those with dietary preferences or restrictions, we offer a variety of options, including gluten-free and vegetarian choices, so that everyone can enjoy the excellence of John's Pizzeria.</p>
                        <img className="col-9" src={table1} alt="" />
                    </div>

                    <p>Thank you for choosing John's Pizzeria. We look forward to serving you and sharing our passion for pizza with you and your loved ones.</p>

                    <p>Buon appetito!</p>
                </div>
            </main>
    )
}