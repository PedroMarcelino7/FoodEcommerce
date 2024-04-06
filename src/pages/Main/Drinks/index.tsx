import { Head } from "../../../components/Head"

import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Drinks() {
    const data = [
        {
            id: 1,
            snack: 'drink',
            name: 'Coca-Cola 2L',
            description: 'Descrição personalizada 3',
            price: 25.5,
            image: 'https://i.imgur.com/Lg3aKhf.jpg'
        },
        {
            id: 2,
            snack: 'drink',
            name: 'Guaraná Antarctica',
            description: 'Descrição personalizada 4',
            price: 23.5,
            image: 'https://i.imgur.com/hOBrOIm.jpg'
        },
        {
            id: 3,
            snack: 'drink',
            name: 'Suco de Abacaxi',
            description: 'Descrição personalizada 5',
            price: 23.5,
            image: 'https://i.imgur.com/VV9qTMh.jpg'
        }
    ]

    return (
        <>
            <Head title="Drinks" description="Nossos melhores drinks" />

            <SnackTitle>Drinks</SnackTitle>

            <Snacks snacks={data} />
        </>
    )
}