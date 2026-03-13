"use client"

import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function CharacterCard({ personagem }: Props) {

  const abrirPersonagem = () => {
    console.log("Abrir ficha:", personagem.id)
  }

  return (
    <button className="characterCard" onClick={abrirPersonagem}>

      <img
        src={personagem.avatar}
        className="avatar"
      />

      <div>
        <h3>{personagem.nome}</h3>
        <p>{personagem.classe}</p>
      </div>

    </button>
  )
}