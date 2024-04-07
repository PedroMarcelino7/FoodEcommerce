import { Head } from "../../../components/Head"

import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { useSnack } from "../../../hooks/useSnack"

export default function Desserts() {
    const { iceCreams } = useSnack()

    return (
        <>
            <Head title="Desserts" description="Nossas melhores sobremesas" />

            <SnackTitle>Desserts</SnackTitle>

            <Snacks snacks={iceCreams} />
        </>
    )
}