import React from 'react'
import { useCartContext } from '../contexts/cartContexts'
import styled from 'styled-components'

function SingleCart({ product }) {
    const { dispatch } = useCartContext();

    return (
        <StyledCard>
            <div className="productTitle">
                {product.title}
            </div>
            <div className="price">
                {`Price: ${product.qty} x ${product.price}`}
            </div>
            <StyledBtnWrapper>
                <StyledBtn onClick={() => dispatch({ type: "increase", payload: { product: product } })}> + </StyledBtn>
                <StyledBtn onClick={() => dispatch({ type: "decrease", payload: { product: product } })}> - </StyledBtn>
                <StyledBtn onClick={() => dispatch({ type: "remove", payload: { product: product } })}> remove </StyledBtn>
            </StyledBtnWrapper>
        </StyledCard>
    )
}


const StyledCard = styled.div`
    min-width: 350px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
`
const StyledBtnWrapper = styled.div`
    margin: 5px 0px;
`
const StyledBtn = styled.button`
    min-width: 20px;
    margin-right: 5px;
    padding: 1px;
    cursor: pointer;

`
export default SingleCart
