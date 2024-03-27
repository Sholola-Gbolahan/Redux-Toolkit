import React from 'react'
import NavBar from './Component/NavBar'
import CartContainer from './Component/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSplice'
import { useEffect } from 'react'



const App = () => {
  const { cartItems} = useSelector( (store) => store.cart)
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(calculateTotals());
  }, [cartItems] )
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  )
}

export default App