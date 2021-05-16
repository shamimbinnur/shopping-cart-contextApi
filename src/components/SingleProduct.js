import React from 'react'
import { useCartContext } from '../contexts/cartContexts';
import styled from 'styled-components'

function SingleProduct({ product, notify }) {
    const { dispatch } = useCartContext();


    const handleAdd = () => {
        notify(product.title)
        dispatch({ type: 'add', payload: { product: product } })
    }
    return (
        <div>
            <StyledCard>
                <StyledTitle> {` ${product.title}`} </StyledTitle>
                <StyledPrice>{`Price: ${product.price}`}</StyledPrice>
                <StyledCategory> {`Category: ${product.category}`}</StyledCategory>
                <StyledPrice>
                    <StyledActionArea>
                        <StyledAddButton onClick={handleAdd}> Add to cart </StyledAddButton>
                    </StyledActionArea>
                </StyledPrice>
            </StyledCard>
        </div>
    )
}

const StyledCard = styled.div`
    min-width: 200px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
`
const StyledTitle = styled.div`
    font-size: 22px;
    `
const StyledPrice = styled.div`
    font-size: 15px;
    margin: 5px 0 0 0;

`
const StyledCategory = styled.div`
    font-size: 12px;
    
    `
const StyledActionArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 15px 0 0 0;
`
const StyledAddButton = styled.button`
    border:none;
    cursor: pointer;
    width: 100%;
`

export default SingleProduct
