import React from 'react'
import NavBar from './Component/NavBar'
import CartContainer from './Component/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSplice'
import { useEffect } from 'react'
import Modal from './Component/Modal'



const App = () => {
  const { cartItems} = useSelector( (store) => store.cart)
// this import the value of isOpen from the modal Store
  const { isOpen} = useSelector( (store) => store.modal)
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(calculateTotals());
  }, [cartItems] )

  return (
    <main>
      {/* This say if isOpen is true display modal and if false hide modal */}
      {/* Since modal initial value is false modal will remain hidding */}
      {isOpen && <Modal />}
      
      <NavBar />
      <CartContainer />
    </main>
  )
}

export default App