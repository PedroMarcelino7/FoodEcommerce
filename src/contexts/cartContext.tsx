import { createContext, ReactNode, useEffect, useState } from "react";
import { SnackData } from "../interfaces/SnackData";

interface Snack extends SnackData {
    quantity: number
    subtotal: number
}

interface RemoveSnackFromCart {
    id: number
    snack: string
}

interface UpdateCartProps {
    id: number
    snack: string
    newQuantity: number
}

interface CartContextProps {
    cart: Snack[]
    addSnackIntoCart: (snack: SnackData) => void
    // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void
    // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
}

interface CardProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CardProviderProps) {
    const [cart, setCart] = useState<Snack[]>([])

    function addSnackIntoCart(snack: SnackData): void {
        const snackExistentInCart = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

        if (snackExistentInCart) {
            const newCart = cart.map((item) => {
                if (item.id === snack.id) {
                    const quantity = item.quantity + 1
                    const subtotal = item.price * quantity

                    return { ...item, quantity, subtotal }
                }

                setCart(newCart)

                return item
            })

            return
        }

        const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
        const newCart = [...cart, newSnack]

        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addSnackIntoCart }}>
            {children}
        </CartContext.Provider >
    )
}