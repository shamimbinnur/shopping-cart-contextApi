import React from 'react';
import SingleProduct from './SingleProduct';
import { productData } from '../utils/data'

function Shop() {


    return (
        <div>
            {
                productData.map(product =>
                (
                    <SingleProduct key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Shop
