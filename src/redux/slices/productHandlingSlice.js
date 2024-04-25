import { createSlice } from "@reduxjs/toolkit";
import { allItemsOnMenuDatabase, othersListData, pizzaListData } from "../../data/localProductDatabase";

const initialState = {
    products: {
        data: {
            all: allItemsOnMenuDatabase, // This is completely internal
            pizza: pizzaListData, // These two are separated for UI purposes
            others: othersListData
        },
        status: 'idle'
    },
    cart: []
}

export const productHandlingSlice = createSlice({
    name: 'productHandling',
    initialState,
    reducers: {
        addToCart: (state, action = { id: '' }) => {
            const itemID = action.payload.id
            const itemOnMenu = state.products.data.all.find(item => item.id == itemID)
            const itemOnCart = state.cart?.find(itemOnCart => itemOnCart.id == itemID)

            if (typeof(itemOnCart) == 'object' && itemOnCart.amount < 100) { // If the item is already on cart, add 1 to its 'amount' property + per item ceiling of 100 units
                itemOnCart.amount++
            }
            else if (typeof(itemOnMenu) == 'object') { // If the item isn't on cart, and it exists in the database, add it to cart
                state.cart.push({...itemOnMenu, amount: 1})
            }
            else throw new Error('The item you tried to add to cart does not exist. Please refresh the page and try again')
        },
        subtractFromCart: (state, action) => {
        },
        removeAllInstancesFromCart: (state, action) => {
            const itemID = action.payload.id
            const itemToRemove = state.cart?.find(itemOnCart => itemOnCart.id == itemID)

            try {
                state.cart.splice(
                    state.cart.indexOf(itemToRemove), 
                    state.cart.indexOf(itemToRemove) + 1
                )
            } catch(err) {console.log(err)}
        },
        placeHolderForFutureThunkSendOrderToDatabase: (state, action) => {
            state.cart = []
        }
    }
})

export const { addToCart, subtractFromCart, removeAllInstancesFromCart, placeHolderForFutureThunkSendOrderToDatabase } = productHandlingSlice.actions
const productHandlingReducer = productHandlingSlice.reducer
export default productHandlingReducer