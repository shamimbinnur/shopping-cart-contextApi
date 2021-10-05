// 	AUTHOR:		SHAMIM BIN NUR
// 	GITHUB:		https://github.com/shamimbinnur
// 	LINKEDIN:	https://www.linkedin.com/in/shamimbinnur
// 	MAIL:		iamshamimbn@gmail.com
// 	SITE:		www.shamimbinnur.me

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

        case 'decrease':
            return cart.map(item => {
                if (item.id === action.payload.product.id) {
                    if (item.qty > 1) {
                        return {
                            ...action.payload.product,
                            qty: item.qty - 1
                        }
                    }
                    else return item
                }
                else return item
            })

        case 'increase':
            return cart.map(item => {
                if (item.id === action.payload.product.id) {
                    return {
                        ...action.payload.product,
                        qty: item.qty + 1
                    }
                }
                else return item

            })

        case 'remove':
            return cart.filter((item) => item.id !== action.payload.product.id)

        default: return cart
    }
}


const CartContext = createContext(null);
export const useCartContext = () => {
    return useContext(CartContext)
}



export const ContextProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, [])
    const totalPrice = cart.reduce((prev, current) => {
        return prev + (current.price * current.qty)

    }, 0)


    return (
        <CartContext.Provider value={{ cart, dispatch, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}
