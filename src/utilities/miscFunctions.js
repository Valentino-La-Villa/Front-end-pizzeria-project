import { useSelector } from "react-redux"

export function getFinalPriceForSingleUnit(itemID) {
    const products = useSelector(state => state.productHandling.products.data.all)
    const item = products.find(item => item.id == itemID)

    try {
        if (item.discount) {
            return (item.priceUSD - (item.discount / 100) * item.priceUSD)
        } else return item.priceUSD
    }
    catch(err) {
        console.log(err)
    }
}

export function getFinalPriceForSingleProduct(itemID) {
    const cart = useSelector(state => state.productHandling.cart)
    const itemOnCart = cart?.find(itemOnCart => itemOnCart.id == itemID)
    if (typeof(itemOnCart) == 'object') {
        return (getFinalPriceForSingleUnit(itemOnCart.id) * itemOnCart.amount)
    }
    else throw new Error('An unknown error has occured. Please refresh the page and try again')
}

export function getFinalPriceForEntireCart() {
    const cart = useSelector(state => state.productHandling.cart)
    const finalPrice = cart.map(itemOnCart => getFinalPriceForSingleProduct(itemOnCart.id)).reduce((a, b) => a + b)
    return finalPrice
}