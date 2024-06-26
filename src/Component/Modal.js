import React from 'react'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSplice'
import { useDispatch } from 'react-redux'


const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4>remove all item from your shopping cart</h4>

            <div className='btn-container'>
                {/* onClick on this button clear closeModal and clear cart at the same time */}
                <button 
                type='buttom'
                 className='btn confirm-btn' 
                 onClick={() => {
                    dispatch(closeModal());
                    dispatch(clearCart()); }}                    > confirm </button>

                <button 
                type='button'
                 className='btn clear-btn' 
                 onClick={() => 
                 dispatch(closeModal())}
                 > cancel</button>

            </div>

        </div>

    </aside>
  )
}

export default Modal