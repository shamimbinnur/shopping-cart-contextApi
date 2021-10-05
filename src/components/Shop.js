// 	AUTHOR:		SHAMIM BIN NUR
// 	GITHUB:		https://github.com/shamimbinnur
// 	LINKEDIN:	https://www.linkedin.com/in/shamimbinnur
// 	MAIL:		iamshamimbn@gmail.com
// 	SITE:		www.shamimbinnur.me


import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import { productData } from '../utils/data'
import styled from 'styled-components'

function Shop() {
    const [notifications, setNotifications] = useState('')

    const notify = (title) => {
        setNotifications(`${title} added to cart!`)
        setTimeout(() => {
            setNotifications(null)
        }, 500);
    }
    return (
        <div>

            <StyledWrapper>
                <StyledP>{notifications} </StyledP>
            </StyledWrapper>

            <StyledContainer>
                {
                    productData.map(product =>
                    (

                        <SingleProduct key={product.id} notify={notify} product={product} />

                    ))
                }

            </StyledContainer>
        </div>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const StyledWrapper = styled.div`
    min-height: 20px;
    display: flex;
    justify-content: center;
    padding: 40px 0px;

`

const StyledP = styled.p`
    font-size: 15px;
`

export default Shop
