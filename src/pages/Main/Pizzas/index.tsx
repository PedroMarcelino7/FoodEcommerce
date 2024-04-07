import { useState, useEffect, useContext } from "react"

import { Head } from "../../../components/Head"

import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getPizzas } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"
import { SnackContext } from "../../../contexts/SnackContext"

export default function Pizzas() {
    const { pizzas } = useContext(SnackContext)

    const data = [
        {
            id: 1,
            snack: 'pizza',
            name: 'Calabresa',
            description: 'Descrição personalizada 9',
            price: 25.5,
            image: 'https://i.imgur.com/5rjJGkV.jpg'
        },
        {
            id: 2,
            snack: 'pizza',
            name: 'Chocolate com Granulado',
            description: 'Descrição personalizada 10',
            price: 23.5,
            image: 'https://i.imgur.com/WCoyGoI.jpg'
        }
    ]

    return (
        <>
            <Head title="Pizzas" description="Nossas melhores pizzas" />

            <SnackTitle>Pizzas</SnackTitle>

            <Snacks snacks={pizzas} />
        </>
    )
}