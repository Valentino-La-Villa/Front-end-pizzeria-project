import React from "react";

import pepperoni from '../assets/products/Pepperoni.webp'
import chickenRanch from '../assets/products/Chicken-ranch.jpg'
import veggie from '../assets/products/Veggie.jpg'
import mozzarella from '../assets/products/Mozzarella.jpg'
import example from '../assets/products/Example.jpg'
import ravioli from '../assets/products/Ravioli.png'
import sorrentinos from '../assets/products/Sorrentinos.png'
import gnocchi from '../assets/products/Gnocchi.png'
import caesar from '../assets/products/Caesar.jpg'

import placeholderBranchImage from '../assets/branches/PhoenixBranch.png'
import pepperoniCloseUpForCarousel from '../assets/decoration/Pepperoni-close-up.jpg'
import multipleTraysForCarousel from '../assets/decoration/Multiple-trays.jpg'
import shareWithYourFriendsForCarousel from '../assets/decoration/Pizza-with-friends.png'

const MenuContext = React.createContext()
const BranchContext = React.createContext()
const CarouselContext = React.createContext()
const ShoppingCartContext = React.createContext()

export function useMenuContext() {
    return React.useContext(MenuContext)
}
export function useBranchContext(){
    return React.useContext(BranchContext)
}
export function useCarouselContext() {
    return React.useContext(CarouselContext)
}
export function useShoppingCartContext() {
    return React.useContext(ShoppingCartContext)
}

export function LocalProvider({children}) {

    // MENU CONTEXT

    const availablePizzaExtras = [ // Extra toppings available to add
        {
            item: 'Bacon',
            priceUSD: 2,
        },
        {
            item: 'Blue cheese',
            priceUSD: 1.50,
        },
        {
            item: 'Cheddar cheese',
            priceUSD: 1
        }
    ]

    const pizzaList = [  // RemovableIngredients and ParticularOptions are non-mandatory properties
        {
            name: 'Cheese Pizza',
            priceUSD: 7,
            description: 'Mozzarella cheese and oregano',
            id: 'uo97FC6gQlRz7OlvYBA5j',
            imgURL: mozzarella,
            discount: false,
            vegan: false,
            removableIngredients: ['Oregano'], // Please order alphabetically
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Pepperoni Pizza',
            priceUSD: 7.50,
            description: "Cheese and pepperoni",
            id: 'm8JhLLmN7YRqj12lKmN1m',
            imgURL: pepperoni,
            discount: 20,
            vegan: false,
            removableIngredients: ['Pepperoni'],
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Chicken Ranch Pizza',
            priceUSD: 12,
            description: "Cheese, chicken and ranch dressing",
            id: 'JFLjQQb932Rqj12lMhjf7',
            imgURL: chickenRanch,
            discount: 50,
            vegan: false,
            removableIngredients: ['Chicken', 'Ranch dressing'],
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Veggie Delight',
            priceUSD: 10,
            description: 'Vegan cheese, eggplant slices, diced pepper, cherry tomatoes and basil leaves',
            id: 'mfewpoi8URJ3928opufhe',
            imgURL: veggie,
            discount: false,
            vegan: true,
            removableIngredients: ['Basil leaves', 'Cherry tomatoes', 'Diced pepper', 'Eggplant slices'],
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Pizza name',
            priceUSD: 300,
            description: 'Ingredients go here',
            id: 'Example1',
            imgURL: example,
            discount: 25,
            vegan: false,
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Pizza name',
            priceUSD: 300,
            description: 'Ingredients go here',
            id: 'Example2',
            imgURL: example,
            discount: false,
            vegan: true,
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Pizza name',
            priceUSD: 300,
            description: 'Ingredients go here',
            id: 'Example3',
            imgURL: example,
            discount: false,
            vegan: false,
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Pizza name',
            priceUSD: 300,
            description: 'Ingredients go here',
            id: 'Example4',
            imgURL: example,
            discount: false,
            vegan: false,
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
    ]

    const othersList = [
        {
            name: 'Ravioli',
            priceUSD: 5,
            description: 'With ricotta and walnut filling',
            id: 'RavioliPlaceholderID',
            imgURL: ravioli,
            discount: false,
            vegan: false,
            particularOptions: ['Carbonara sauce', 'Olive oil', 'Tomato sauce', 'Whipped cream'],
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Sorrentinos',
            priceUSD: 6,
            description: 'With spinach filling',
            id: 'SorrentinoPlaceholderID',
            imgURL: sorrentinos,
            discount: 25,
            vegan: true,
            particularOptions: ['Carbonara sauce', 'Olive oil', 'Tomato sauce', 'Whipped cream'],
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: 'Gnocchi',
            priceUSD: 5,
            description: 'Made with potato dough',
            id: 'GnocchiPlaceholderID',
            imgURL: gnocchi,
            discount: false,
            vegan: true,
            particularOptions: ['Carbonara sauce', 'Olive oil', 'Tomato sauce', 'Whipped cream'],
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
        {
            name: "John's Caesar Salad",
            priceUSD: 10,
            description: 'Shrimp, chicken, lettuce, cherry tomatoes and ranch dressing',
            id: 'CaesarSaladPlaceholderID',
            imgURL: caesar,
            discount: false,
            vegan: false,
            removableIngredients: ['Cherry tomatoes', 'Chicken', 'Lettuce', 'Shrimp', 'Ranch dressing'],
            extras: availablePizzaExtras,
            amount: 0,
            finalPrice: function () {
                return this?.discount ? 
                ((this.priceUSD - (this?.discount/100)*this.priceUSD) * (this.amount || 1)).toFixed(2)
                :
                (this.priceUSD * this.amount).toFixed(2)
            }
        },
    ]

    // BRANCH CONTEXT

    const branches = [
        {
            city: 'Phoenix',
            state: 'Arizona',
            state_twoLetterFormat: 'AZ',
            address: 'Phoenix address 1234',
            mapsURL: 'https://maps.app.goo.gl/nfY7u16TPpfy4wW9A',
            reservationURL: 'https://github.com/Valentino-La-Villa',
            associatedPicture: placeholderBranchImage,
            id: 'PhoenixAZ',
            imgSize: 'col-4',
        },
        {
            city: 'Dallas',
            state: 'Texas',
            state_twoLetterFormat: 'TX',
            address: 'Dallas address 1234',
            mapsURL: 'https://maps.app.goo.gl/WosrF7e1jmmCLtAP6',
            reservationURL: 'https://github.com/Valentino-La-Villa',
            associatedPicture: placeholderBranchImage,
            id: 'DallasTX',
            imgSize: 'col-4',
        },
        {
            city: 'New York City',
            state: '',
            state_twoLetterFormat: 'NY',
            address: 'New York address 1234',
            mapsURL: 'https://maps.app.goo.gl/hmwcwgGeBtWeEQ4JA',
            reservationURL: 'https://github.com/Valentino-La-Villa',
            associatedPicture: placeholderBranchImage,
            id: 'NewYorkCity',
            imgSize: 'col-4',
        },
        {
            city: 'Los Angeles',
            state: 'California',
            state_twoLetterFormat: 'CA',
            address: 'Los Angeles address 1234',
            mapsURL: 'https://maps.app.goo.gl/ABzZyCbwLjnDLNK36',
            reservationURL: 'https://github.com/Valentino-La-Villa',
            associatedPicture: placeholderBranchImage,
            id: 'LosAngelesCF',
            imgSize: 'col-4',
        },
    ]

    // CAROUSEL CONTEXT

    const miscItems = [
        {
            isMiscellaneousForCarousel: true,
            caption: 'Catch a break',
            subcaption: 'Get some pizza!',
            imgURL: multipleTraysForCarousel,
            id: 'PlaceholderFirstSlideID'
        },
        {
            isMiscellaneousForCarousel: true,
            imgURL: pepperoniCloseUpForCarousel,
            id: 'PlaceholderSecondToLastSlideID'
        },
        {
            isMiscellaneousForCarousel: true,
            caption: 'Get one with your friends',
            subcaption: 'Sharing is caring!',
            imgURL: shareWithYourFriendsForCarousel,
            id: 'PlaceholderLastSlideID'
        },
    ]

    const allItems = [miscItems[0], ...pizzaList, ...othersList, miscItems[1], miscItems[2]] // Amateur-ish way to format it but .slice won't work

    const itemsForCarousel = allItems.filter(item => item.discount || item.isMiscellaneousForCarousel) // This will send both misc slideshow items and items on discount (misc items are needed in the case no discounts are up so that the carousel has at least three slides to show)
    
    // SHOPPING CART CONTEXT

    const [shoppingList, setShoppingList] = React.useState([])

    const addToShoppingList =(event)=>{
        const itemToAdd = [...pizzaList, ...othersList].find(item => item.id == event.target.id)

        if (shoppingList.find(item => itemToAdd.id === item.id)) { // Filtering repeated items so that they only have +1 to amount instead of being rendered as a separate item
            setShoppingList(previousShoppingList=>{
                const previousListWithoutItemToAdd = previousShoppingList.filter(item => item.id != itemToAdd.id) // I remove the initial item from the list first
                const previousItemAmount = previousShoppingList.find(item => itemToAdd.id === item.id).amount // Then replace it with a copy that has +1 to its amount

                return ([
                    ...previousListWithoutItemToAdd,
                    {
                        ...itemToAdd,
                        amount: previousItemAmount+1
                    }
                ])
            })
        } 
        else {
            itemToAdd.amount = 1
            setShoppingList(previousShoppingList=>{
                return ([
                    ...previousShoppingList,
                    itemToAdd
                ])
            })
        }
    }

    const removeFromShoppingList =(event)=> {
        const itemToRemove = [...pizzaList, ...othersList].find(item => item.id == event.target.id)
        setShoppingList(previousShoppingList=>{
            return (previousShoppingList.filter(item => item.id != itemToRemove.id))
        })
    }

    return (
        <MenuContext.Provider value={
            {pizzaList: pizzaList,
            othersList: othersList}
        }
        >
            <BranchContext.Provider
            value={
                {branches: branches}
                }>
                    <CarouselContext.Provider value={
                        {itemsForCarousel: itemsForCarousel}
                    }>
                        <ShoppingCartContext.Provider value={
                            {shoppingList: shoppingList,
                            setShoppingList: setShoppingList,
                            addToShoppingList: addToShoppingList,
                            removeFromShoppingList: removeFromShoppingList}
                        }>
                            {children}
                        </ShoppingCartContext.Provider>
                    </CarouselContext.Provider>
            </BranchContext.Provider>
        </MenuContext.Provider>
    )
}