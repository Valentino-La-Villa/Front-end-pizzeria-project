import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Branches from './components/Branches'
import Home from './components/Home'
import Cart from './components/Cart'

import { useShoppingCartContext } from './components/ContextProvider'
import { Navigate } from 'react-router-dom'

function App() {

  const CartAccessValidation =({children})=>{ // This will only display the 'cart' page when there are items inside the shopping cart
    const {shoppingList} = useShoppingCartContext()

    if (shoppingList.length == 0) {
      return <Navigate to='/products'/>
    }

    return children
  }

  return (
    <>
    <main className='main--control'>
      <Header />

      <Routes>
        <Route path='/'
          element={<>
          <Home />
          </> }>
        </Route>

        <Route path='/contact'
          element={
            <Contact />
          }>
        </Route>

        <Route path='/branches'
          element={
            <Branches />
          }>
        </Route>

        <Route path='/products'
          element={
            <Products />
          }>
        </Route>


        <Route path='/about'
          element={
            <About />
          }>
        </Route>

        <Route path='/cart'
          element={
          <CartAccessValidation>
              <Cart />
          </CartAccessValidation>}>
        </Route>

        <Route path='*' element={<>
        <h1 className='text-center m-5'>404: URL Not found</h1>
        </>}></Route>

      </Routes>
    </main>
      
      <Footer />
    </>
  )
}

export default App
