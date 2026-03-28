export default function Status({ personagem }) {
  return (
    <div className="status">

      <img
        src={personagem.avatar || "/avatar.png"}
        width={120}
      />

      <p>HP: {personagem.status.pv}</p>
      <p>XP: {personagem.xp}</p>
      <p>Nível: {personagem.nivel}</p>

    </div>
  )
}