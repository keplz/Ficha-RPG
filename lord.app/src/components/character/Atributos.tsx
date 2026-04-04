// Atributos.tsx

import "@/styles/atributos.css"
import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function Atributos({ personagem }: Props) {

  const calcularMod = (valor: number) => {
    return Math.floor((valor - 10) / 2)
  }

  const attrs = [
    { label: "FOR", value: personagem.atributos.forca },
    { label: "DES", value: personagem.atributos.destreza },
    { label: "CON", value: personagem.atributos.constituicao },
    { label: "INT", value: personagem.atributos.inteligencia },
    { label: "SAB", value: personagem.atributos.sabedoria },
    { label: "CAR", value: personagem.atributos.carisma },
  ]

  return (
    <div className="atributosCard">

      <h3>Atributos</h3>

      <div className="atributosGrid">
        {attrs.map((attr) => {
          const mod = calcularMod(attr.value)

          return (
            <div key={attr.label} className="attrBox">
              <span>{attr.label}</span>
              <strong>{attr.value}</strong>

              <small className={`mod ${mod >= 0 ? "positivo" : "negativo"}`}>
                {mod >= 0 ? `+${mod}` : mod}
              </small>
            </div>
          )
        })}
      </div>

    </div>
  )
}