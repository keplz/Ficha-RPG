"use client"

import "@/styles/pericias.css"
import { Character } from "@/types/Character"
import { PERICIAS } from "@/data/pericias"

type Props = {
  personagem: Character
}

export default function Pericias({ personagem }: Props) {

  // 🔹 função de modificador
  const calcularMod = (valor: number) => {
    return Math.floor((valor - 10) / 2)
  }

  // 🔹 pega valor do atributo dinamicamente
  const getValorAtributo = (atributo: string) => {
    return personagem.atributos[
      atributo as keyof typeof personagem.atributos
    ]
  }

  return (
    <div className="periciasCard">

      <h3>Perícias</h3>

      <div className="periciasList">

        {PERICIAS.map((p) => {
          const valor = getValorAtributo(p.atributo)
          const mod = calcularMod(valor)

          return (
            <div key={p.nome} className="periciaItem">

              <span>
                {p.nome} ({p.atributo.slice(0, 3).toUpperCase()})
              </span>

              <strong>
                {mod >= 0 ? `+${mod}` : mod}
              </strong>

            </div>
          )
        })}

      </div>

    </div>
  )
}