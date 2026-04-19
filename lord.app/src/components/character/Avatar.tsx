"use client"
import "@/styles/avatar.css"
import { Character } from "@/types/Character"
import { useState } from 'react'

type Props = {
  personagem: Character
  setPersonagem: (p: Character) => void
}

export default function Avatar({ personagem, setPersonagem }: Props) {

  const [editando, setEditando] = useState<string | null>(null)

  function atualizarCampo(campo: keyof Character, valor: string) {
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

        <div className="infoItem">
          <span>Jogador</span>
            {editando === 'jogador' ? (
              <input
                className="editavelInput"
                value={personagem.jogador}
                onChange={(e) => atualizarCampo('jogador', e.target.value)}
                onBlur={() => setEditando(null)}
                autoFocus
              />
            ) : (
              <strong onClick={() => setEditando('jogador')}>
                {personagem.jogador || '-'}
              </strong>
            )}
        </div>

        <div className="infoItem">
          <span>Classe</span>
            {editando === 'classe' ? (
              <input
                className="editavelInput"
                value={personagem.classe}
                onChange={(e) => atualizarCampo('classe', e.target.value)}
                onBlur={() => setEditando(null)}
                autoFocus
              />
            ) : (
              <strong onClick={() => setEditando('classe')}>
                {personagem.classe || '-'}
              </strong>
            )}
        </div>

        <div className="infoItem">
          <span>Tendência</span>
            {editando === 'tendencia' ? (
              <input
                className="editavelInput" 
                value={personagem.tendencia}
                onChange={(e) => atualizarCampo('tendencia', e.target.value)}
                onBlur={() => setEditando(null)}
                autoFocus
              />
            ) : (
              <strong onClick={() => setEditando('tendencia')}>
                {personagem.tendencia || '-'}
              </strong>
            )}
        </div>

        <div className="infoItem">
          <span>Sexo</span>
            {editando === 'sexo' ? (
              <input
                className="editavelInput" 
                value={personagem.sexo}
                onChange={(e) => atualizarCampo('sexo', e.target.value)}
                onBlur={() => setEditando(null)}
                autoFocus
              />
            ) : (
              <strong onClick={() => setEditando('sexo')}>
                {personagem.sexo || '-'}
              </strong>
            )}
        </div>

        <div className="infoItem">
          <span>Idade</span>
            {editando === 'idade' ? (
              <input
                className="editavelInput" 
                value={personagem.idade}
                onChange={(e) => atualizarCampo('idade', e.target.value)}
                onBlur={() => setEditando(null)}
                autoFocus
              />
            ) : (
              <strong onClick={() => setEditando('idade')}>
                {personagem.idade || '-'}
              </strong>
            )}
        </div>

        <div className="infoItem">
          <span>Divindade</span>
            {editando === 'divindade' ? (
              <input
                className="editavelInput" 
                value={personagem.divindade}
                onChange={(e) => atualizarCampo('divindade', e.target.value)}
                onBlur={() => setEditando(null)}
                autoFocus
              />
            ) : (
              <strong onClick={() => setEditando('divindade')}>
                {personagem.divindade || '-'}
              </strong>
            )}
        </div>

        <div className="infoItem">
          <span>Tamanho</span>
            {editando === 'tamanho' ? (
              <input
                className="editavelInput" 
                value={personagem.tamanho}
                onChange={(e) => atualizarCampo('tamanho', e.target.value)}
                onBlur={() => setEditando(null)}
                autoFocus
              />
            ) : (
              <strong onClick={() => setEditando('tamanho')}>
                {personagem.tamanho || '-'}
              </strong>
            )}
        </div>

      </div>
    </div>
  )
}