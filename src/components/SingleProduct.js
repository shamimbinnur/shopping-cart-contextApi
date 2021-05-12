import React, { useState } from 'react'
import { useCartContext } from '../contexts/cartContexts';

function SingleProduct({ product }) {
    const { dispatch } = useCartContext();
    const [addedToCart, setAddedToCart] = useState(false)

    const handleAdd = () => {
        setAddedToCart(true)
        dispatch({ type: 'add', payload: { product: product } })
    }

    return (
        <div>
            <div className="card">
                <div className="productTitle">{product.title}</div>
                <div className="productCategory">{product.category}</div>
                <div className="productPrice">{product.price}</div>
                <div className="action-area">
                    <div className="btn">
                        <button onClick={handleAdd} > {addedToCart ? "Add more" : "Add"} </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
