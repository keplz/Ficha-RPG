// Avatar.tsx
import "@/styles/avatar.css"
import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function Avatar({ personagem }: Props) {
  return (
    <div className="avatarCard">

      <h2 className="nome">{personagem.name || "-"}</h2>

      <div className="infoGrid">

        <div className="infoItem">
          <span>Jogador</span>
          <strong>{personagem.jogador || "-"}</strong>
        </div>

        <div className="infoItem">
          <span>Classe</span>
          <strong>{personagem.classe || "-"}</strong>
        </div>

        <div className="infoItem">
          <span>Tendência</span>
          <strong>{personagem.tendencia || "-"}</strong>
        </div>

        <div className="infoItem">
          <span>Sexo</span>
          <strong>{personagem.sexo || "-"}</strong>
        </div>

        <div className="infoItem">
          <span>Idade</span>
          <strong>{personagem.idade ?? "-"}</strong>
        </div>

        <div className="infoItem">
          <span>Divindade</span>
          <strong>{personagem.divindade || "-"}</strong>
        </div>

        <div className="infoItem">
          <span>Tamanho</span>
          <strong>{personagem.tamanho || "-"}</strong>
        </div>

      </div>

    </div>
  )
}