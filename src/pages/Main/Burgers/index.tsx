import { Head } from "../../../components/Head"

import { SnackTitle } from "../../../components/SnackTitle"

export default function Burgers() {
    const data = [
        {
            id: 1,
            snack: 'burger',
            name: 'Mega',
            description: 'Descrição personalizada 1',
            price: 25.5,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 2,
            snack: 'burger',
            name: 'Extra bacon',
            description: 'Descrição personalizada 2',
            price: 23.5,
            image: 'https://i.imgur.com/B4J04AJ.jpg'
        }
    ]

    return (
        <>
            <Head title="Burgers" description="Nossos melhores burgers" />
            
            <SnackTitle>Burgers</SnackTitle>
        </>
    )
}