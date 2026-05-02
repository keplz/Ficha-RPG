"use client"
import "@/styles/avatar.css"
import { Character } from "@/types/Character"
import { useState } from 'react'
import CampoEditavel from "../ui/CampoEditavel"

type Props = {
  personagem: Character
  setPersonagem: (p: Character) => void
}

export default function Avatar({ personagem, setPersonagem }: Props) {

  const [editando, setEditando] = useState<string | null>(null)

  function atualizarCampo(campo: keyof Character, valor: any) {
    setPersonagem({
      ...personagem,
      [campo]: valor
    })
  }

  return (
    <div className="avatarCard">
      {editando === "name" ? (
        <input
          className="editavelInput"
          value={personagem.name}
          onChange={(e) => atualizarCampo("name", e.target.value)}
          onBlur={() => setEditando(null)}
          autoFocus
        />
      ) : (
        <h2
          className="nome"
          onClick={() => setEditando("name")}
        >
          {personagem.name || "-"}
        </h2>
      )}

    <div className="infoGrid">

      <CampoEditavel
        label="Jogador"
        campo="jogador"
        valor={personagem.jogador}
        atualizar={atualizarCampo}
      />

      <CampoEditavel
        label="Classe"
        campo="classe"
        valor={personagem.classe}
        atualizar={atualizarCampo}
      />

      <CampoEditavel
        label="Tendência"
        campo="tendencia"
        valor={personagem.tendencia}
        atualizar={atualizarCampo}
      />

      <CampoEditavel
        label="Sexo"
        campo="sexo"
        valor={personagem.sexo}
        atualizar={atualizarCampo}
      />

      <CampoEditavel
        label="Idade"
        campo="idade"
        valor={personagem.idade}
        atualizar={atualizarCampo}
      />

      <CampoEditavel
        label="Divindade"
        campo="divindade"
        valor={personagem.divindade}
        atualizar={atualizarCampo}
      />

      <CampoEditavel
        label="Tamanho"
        campo="tamanho"
        valor={personagem.tamanho}
        atualizar={atualizarCampo}
      />

    </div>    
</div>
  )
}