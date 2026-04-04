import "@/styles/combate.css"
import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function Combate({ personagem }: Props) {

  const mod = (valor: number) => Math.floor((valor - 10) / 2)

  const forMod = mod(personagem.atributos.forca)
  const desMod = mod(personagem.atributos.destreza)

  // 🔥 Equipamentos
  const arma = personagem.arma
  const armadura = personagem.equipamentos?.armadura?.defesa || 0
  const escudo = personagem.equipamentos?.escudo?.defesa || 0

  const atributoBase = arma?.atributo || 'forca'

  const atributoValor = 
    personagem.atributos[
      atributoBase as keyof typeof personagem.atributos
    ]

  const atributoMod = mod(atributoValor)

  // ⚔️ Ataque (por enquanto FOR)
  const ataque = 
    (arma?.bonusAtaque || 0) + atributoMod

  // ⚔️ Dano
  const dano = `${arma?.dano || "1d4"}${
    atributoMod >= 0 ? `+${atributoMod}` : atributoMod
  }`

  // 🛡️ Defesa TOTAL
  const defesa =
    10 +
    desMod +
    personagem.status.defesa +
    armadura +
    escudo

  // ⚡ Iniciativa
  const iniciativa = personagem.combate.iniciativa + desMod

  return (
    <div className="combateCard">

      <h3>Combate</h3>

      <div className="combateGrid">

        <div className="combatItem">
          <span>Ataque</span>
          <strong>+{ataque}</strong>
        </div>

        <div className="combatItem">
          <span>Dano</span>
          <strong>{personagem.combate.dano}</strong>
        </div>

        <div className="combatItem">
          <span>Defesa</span>
          <strong>{defesa}</strong>
        </div>

        <div className="combatItem">
          <span>Iniciativa</span>
          <strong>
            {iniciativa >= 0 ? `+${iniciativa}` : iniciativa}
          </strong>
        </div>

      </div>
      <div className="combatLinhaArma">

        <div>
          <span>Arma</span>
          <strong>{arma?.nome || "Sem arma"}</strong>
        </div>

        <div>
          <span>Ataque</span>
          <strong>{ataque >= 0 ? `+${ataque}` : ataque}</strong>
        </div>

        <div>
          <span>Dano</span>
          <strong>{dano}</strong>
        </div>

      </div>

    </div>
  )
}