import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"

import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getIceCreams } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export default function Desserts() {
    const [iceCreams, setIceCreams] = useState<SnackData[]>([])

    useEffect(() => {
        (async () => {
            const iceCreamRequest = await getIceCreams()

            setIceCreams(iceCreamRequest.data)
        })()
    }, [])

    return (
        <>
            <Head title="Desserts" description="Nossas melhores sobremesas" />

            <SnackTitle>Desserts</SnackTitle>

            <Snacks snacks={iceCreams} />
        </>
    )
}