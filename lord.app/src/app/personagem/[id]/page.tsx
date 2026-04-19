"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { getCharacterById } from "@/lib/characters"

import '@/styles/header.css'
import Avatar from "@/components/character/Avatar"
import Status from "@/components/character/Status"
import Atributos from "@/components/character/Atributos"
import Combate from "@/components/character/Combate"
import Pericias from "@/components/character/Pericias"
import Equipamentos from "@/components/character/Equipamentos"
import Habilidades from "@/components/character/Habilidades"
import Magias from "@/components/character/Magias"


export default function PersonagemPage() {
  const params = useParams()
  const id = Number(params.id)

  const personagemInicial = getCharacterById(id)

  if (!personagemInicial) {
    return <h1>Personagem não encontrado</h1>
  }

  const [personagem, setPersonagem] = useState(personagemInicial)

  return (
    <main className="fichaContainer">

      <div className='headerContainer'>
        <Avatar personagem={personagem} setPersonagem={setPersonagem} />
        <Status personagem={personagem} />
      </div>

      <div className="mainGrid">
        <Atributos personagem={personagem} />
        <Combate personagem={personagem} />
        <Pericias personagem={personagem} />
        <Equipamentos personagem={personagem} />
        <Habilidades personagem={personagem} />
        <Magias personagem={personagem} />
      </div>

    </main>
  )
}