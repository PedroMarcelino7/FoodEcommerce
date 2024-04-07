import { useState, useEffect, useContext } from "react"

import { Head } from "../../../components/Head"

import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getDrinks } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"
import { SnackContext } from "../../../App"

export default function Drinks() {
    const { drinks } = useContext(SnackContext)

    return (
        <>
            <Head title="Drinks" description="Nossos melhores drinks" />

            <SnackTitle>Drinks</SnackTitle>

            <Snacks snacks={drinks} />
        </>
    )
}