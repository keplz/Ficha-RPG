// Status.tsx
import "@/styles/status.css"
import { Character } from "@/types/Character"

type Props = {
  personagem: Character
}

export default function Status({ personagem }: Props) {

  const hpAtual = personagem.status.pv
  const hpMax = personagem.status.pvMax // depois você pode calcular isso

  const xpAtual = personagem.xp
  const xpMax = personagem.xpMax // depois você ajusta por nível

  const hpPercent = (hpAtual / hpMax) * 100
  const xpPercent = (xpAtual / xpMax) * 100

  return (
    <div className="statusCard">

      {/* IMAGEM */}
      <img
        src={personagem.avatar || "/avatar.png"}
        className="avatarImg"
      />

      {/* NÍVEL */}
      <div className="nivel">
        Nível {personagem.nivel}
      </div>

      {/* HP */}
      <div className="barContainer">
        <span>HP</span>
        <div className="bar">
          <div
            className="fill hp"
            style={{ width: `${hpPercent}%` }}
          />
        </div>
        <small>{hpAtual} / {hpMax}</small>
      </div>

      {/* XP */}
      <div className="barContainer">
        <span>XP</span>
        <div className="bar">
          <div
            className="fill xp"
            style={{ width: `${xpPercent}%` }}
          />
        </div>
        <small>{xpAtual} / {xpMax}</small>
      </div>

    </div>
  )
}