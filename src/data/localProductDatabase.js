import pepperoni from '../assets/products/Pepperoni.webp'
import chickenRanch from '../assets/products/Chicken-ranch.jpg'
import veggie from '../assets/products/Veggie.jpg'
import mozzarella from '../assets/products/Mozzarella.jpg'
import example from '../assets/products/Example.jpg'

import ravioli from '../assets/products/Ravioli.png'
import sorrentinos from '../assets/products/Sorrentinos.png'
import gnocchi from '../assets/products/Gnocchi.png'
import caesar from '../assets/products/Caesar.jpg'



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

export const pizzaListData = [  // RemovableIngredients and ParticularOptions are non-mandatory properties
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
},
]
export const othersListData = [
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
},
]

export const allItemsOnMenuDatabase = [...pizzaListData, ...othersListData]