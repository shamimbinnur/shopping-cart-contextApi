import React from 'react'
import { useCartContext } from '../contexts/cartContexts'

function Cart() {
    const { cart } = useCartContext();

    return (
        <div>
            {
                cart.map(item => (
                    <div key={item.id} >
                        <div className="productTitle">{item.title}</div>
                        <div className="productPrice">{item.price}</div>
                        <div className="qty"> {`${item.qty} x ${item.price}`}</div>
                    </div>

                ))
            }
        </div>
    )
}

export default Cart
