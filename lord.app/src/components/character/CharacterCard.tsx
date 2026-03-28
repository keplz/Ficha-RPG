"use client"

import { useRouter } from "next/navigation"
import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function CharacterCard({ personagem }: Props) {

  const router = useRouter()

  const abrirFicha = () => {
    router.push(`/personagem/${personagem.id}`)
  }

  return (
    <button
      className="characterCard"
      onClick={abrirFicha}
    >

      <img
        src={personagem.avatar}
        className="avatar"
      />

      <div>
        <h3>{personagem.name}</h3>
        <p>{personagem.classe}</p>
      </div>

    </button>
  )
}