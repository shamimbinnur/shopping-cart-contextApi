import { createContext, useContext, useReducer } from "react";

const reducer = (cart, action) => {
    switch (action.type) {
        case 'add':
            if (!cart.find((item) => item.id === action.payload.product.id)) {
                return [...cart, {
                    ...action.payload.product,
                    qty: 1,
                }]
            }
            else {
                return cart.map(item => {
                    if (item.id === action.payload.product.id) {
                        return {
                            ...action.payload.product,
                            qty: item.qty + 1
                        }
                    }
                    else return item
                })
            }

        case 'change':
            return cart.map(item => {
                return { ...item, complete: !item.complete }
            })
        default: return cart
    }
}

const CartContext = createContext(null);
export const useCartContext = () => {
    return useContext(CartContext)
}



export const ContextProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, [])

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}