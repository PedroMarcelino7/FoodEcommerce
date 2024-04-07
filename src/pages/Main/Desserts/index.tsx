import { useState, useEffect, useContext } from "react"

import { Head } from "../../../components/Head"

import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getIceCreams } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"
import { SnackContext } from "../../../contexts/SnackContext"

export default function Desserts() {
    const { iceCreams } = useContext(SnackContext)

    return (
        <>
            <Head title="Desserts" description="Nossas melhores sobremesas" />

            <SnackTitle>Desserts</SnackTitle>

            <Snacks snacks={iceCreams} />
        </>
    )
}