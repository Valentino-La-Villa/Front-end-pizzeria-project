import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore"
import { ordersCollection, productsCollection } from "../../data/firestore";
import Swal from "sweetalert2";

const initialState = {
    products: {
        data: {
            all: [], // This is completely internal
            pizza: [], // These two are separated for UI purposes
            other: []
        },
        status: 'idle'
    },
    cart: [],
    orderStatus: 'idle'
}

export const getProductListFromDatabase = createAsyncThunk('products/getProductListFromDatabase', async()=>{
    const orderedProductList = query(productsCollection, orderBy('orderInMenu', 'asc'))
    const productDatabase = await getDocs(orderedProductList).then(
        (snapshot) => {
            let products = []
            snapshot.docs.forEach((doc) => {
    
                const data = doc.data()
    
                products.push({
                    ...data,
                    id: doc.id
                })
            })
            return products
        }
    ).catch(err => console.log(err))

    if (typeof(productDatabase == 'object')) {
        const pizza = productDatabase.filter(item => item.itemType == 'pizza')
        const other = productDatabase.filter(item => item.itemType == 'other')
        return {
            all: productDatabase,
            pizza: pizza,
            other: other,
        }
    }
})

export const deliverOrderToDatabase = createAsyncThunk('products/deliverOrderToDatabase', async(payload)=> {
    console.log(payload)
    try {
        addDoc(ordersCollection, {
            createdAt: serverTimestamp(),
            address: payload.address,
            location: payload.location,
            price: payload.price,
            order: payload.cartJson,
        })

        return payload
    } catch(err) {console.log(err)}
})

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
    },
    extraReducers(builder) {
        builder
        .addCase((getProductListFromDatabase.pending), (state) => {
            state.products.status = 'loading'
        })
        .addCase((getProductListFromDatabase.fulfilled), (state, action) => {
            const data = action.payload
            state.products.status = 'fulfilled'
            state.products.data = data
        })
        .addCase((getProductListFromDatabase.rejected), (state) => {
            state.products.status = 'rejected'
        })

        builder
        .addCase((deliverOrderToDatabase.pending), (state) => {
            state.orderStatus = 'loading'
        })
        .addCase((deliverOrderToDatabase.fulfilled), (state, action) => {
            state.orderStatus = 'fulfilled'
            const payload = action.payload
            console.log(`Processed incoming order with the following details:
                Delivery address: ${payload.address}
                Location: ${payload.location}
                Total price: $${payload.price}
                Order:`, payload.cartJson
            )

            
            Swal.fire({
                title: `Your order has been placed!`,
                icon: 'success',
                text: `It will be delivered at ${payload.address} - ${payload.location}`,
                timer: 30000,
                timerProgressBar: true,
                confirmButtonColor: "#3085d6",
            })
        })
        .addCase((deliverOrderToDatabase.rejected), (state) => {
            state.orderStatus = 'rejected'
            Swal.fire({
                title: 'An unexpected error has happened!',
                text: `Please, refresh the page and try again`,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        })
    }
})

export const { addToCart, subtractFromCart, removeAllInstancesFromCart } = productHandlingSlice.actions
const productHandlingReducer = productHandlingSlice.reducer
export default productHandlingReducer