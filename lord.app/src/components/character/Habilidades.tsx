import "@/styles/habilidades.css"
import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function Habilidades({ personagem }: Props) {

  const habilidades = personagem.habilidades || []

  return (
    <div className="habilidadesCard">

      <h3 className="habilidadesText">Habilidades</h3>

      {habilidades.length > 0 ? (
        <div className="habilidadesList">
          {habilidades.map((h, index) => (
            <div key={index} className="habilidadeItem">

              <strong>{h.nome}</strong>

              <p>{h.descricao}</p>

            </div>
          ))}
        </div>
      ) : (
        <small>Nenhuma habilidade</small>
      )}

    </div>
  )
}