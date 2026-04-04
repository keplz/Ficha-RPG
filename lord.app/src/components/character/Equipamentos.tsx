"use client"

import "@/styles/equipamentos.css"
import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function Equipamentos({ personagem }: Props) {

  const armadura = personagem.equipamentos?.armadura
  const escudo = personagem.equipamentos?.escudo
  const acessorios = personagem.equipamentos?.acessorios || []

  return (
    <div className="equipamentosCard">

      <h3>Equipamentos</h3>

      {/* ARMADURA */}
      <div className="equipItem">
        <span>Armadura</span>
        <strong>
          {armadura
            ? `${armadura.nome} ${armadura.defesa ? `(+${armadura.defesa})` : ""}`
            : "-"}
        </strong>
      </div>

      {/* ESCUDO */}
      <div className="equipItem">
        <span>Escudo</span>
        <strong>
          {escudo
            ? `${escudo.nome} ${escudo.defesa ? `(+${escudo.defesa})` : ""}`
            : "-"}
        </strong>
      </div>

      {/* ACESSÓRIOS */}
      <div className="equipAcessorios">

        <span>Acessórios</span>

        {acessorios.length > 0 ? (
          acessorios.map((item, index) => (
            <div key={index} className="acessorioItem">
              {item.nome}
            </div>
          ))
        ) : (
          <small>Nenhum acessório equipado</small>
        )}

      </div>

    </div>
  )
}