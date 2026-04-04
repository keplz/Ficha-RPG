"use client"

import "@/styles/magias.css"
import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function Magias({ personagem }: Props) {

  const magias = personagem.magia || []

  const pm = personagem.status.pm
  const pmMax = personagem.status.pmMax

  const porcentagem = (pm / pmMax) * 100

  return (
    <div className="magiasCard">

      {/* 🔥 HEADER COM BARRA */}
      <div className="magiasHeader">

        <h3>Magias</h3>

        <div className="manaBox">
          <div className="manaBar">
            <div
              className="manaFill"
              style={{ width: `${porcentagem}%` }}
            />
          </div>

          <span>{pm}/{pmMax} PM</span>
        </div>

      </div>

      {magias.length > 0 ? (
        <div className="magiasList">

          {magias.map((m, index) => (
            <div key={index} className="magiaItem">

            <strong className="magiaNome">
            {m.nome} <span className="magiaCusto">({m.custo} PM)</span>
            </strong>

            <p className="magiaDesc">{m.descricao}</p>

            </div>
          ))}

        </div>
      ) : (
        <small>Nenhuma magia</small>
      )}

    </div>
  )
}