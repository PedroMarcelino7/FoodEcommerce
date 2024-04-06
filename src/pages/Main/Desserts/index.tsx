import { Head } from "../../../components/Head"

import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Desserts() {
    const data = [
        {
            id: 1,
            snack: 'ice-cream',
            name: 'Casquinha',
            description: 'Descrição personalizada 6',
            price: 25.5,
            image: 'https://i.imgur.com/YGmeoCm.jpg'
        },
        {
            id: 2,
            snack: 'ice-cream',
            name: 'Chocolate com Granulado',
            description: 'Descrição personalizada 7',
            price: 23.5,
            image: 'https://i.imgur.com/osAHOLe.jpg'
        },
        {
            id: 3,
            snack: 'ice-cream',
            name: 'Flocos',
            description: 'Descrição personalizada 8',
            price: 23.5,
            image: 'https://i.imgur.com/qgnFLiy.jpg'
        }
    ]

    return (
        <>
            <Head title="Desserts" description="Nossas melhores sobremesas" />

            <SnackTitle>Desserts</SnackTitle>

            <Snacks snacks={data} />
        </>
    )
}