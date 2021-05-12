import React from 'react'
import { useCartContext } from '../contexts/cartContexts'
import SingleCart from './SingleCart'
import styled from 'styled-components'

function Cart() {
    const { cart, totalPrice } = useCartContext();

    return (
        <StyledContainer>
            <StyledWrapper>
                {
                    cart.map(cart => (
                        <SingleCart key={cart.id} product={cart} />
                    ))
                }
            </StyledWrapper>
            <StyledTotalWrapper>
                {`Total: ${totalPrice} Taka`}
            </StyledTotalWrapper>
            <StyledBtn>
                Pay now
            </StyledBtn>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const StyledTotalWrapper = styled.div`
    font-size: 15px;
`
const StyledBtn = styled.button`
    width: 350px;
    padding: 1px;
    margin: 10px 0px;
    cursor: pointer;
`
export default Cart
