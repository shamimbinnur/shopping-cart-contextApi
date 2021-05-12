import React from 'react'
import styled from 'styled-components';
import { useCartContext } from '../contexts/cartContexts'

function Nav() {
    const { cart } = useCartContext()

    return (
        <div>
            <StyledNav>
                <StyledCartQty> Cart: {cart.length}</StyledCartQty>

            </StyledNav>
        </div>
    )
}

const StyledNav = styled.nav`
    display: flex;
    background-color: #c7c7c7;
    justify-content: space-evenly;
    padding: 10px;
`
const StyledCartQty = styled.p`

    font-size: 20px;
`
export default Nav
