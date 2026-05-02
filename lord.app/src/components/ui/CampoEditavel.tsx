"use client"

import { useState } from "react"
import { Character } from "@/types/Character"


type Props = {
  label: string
  campo: keyof Character
  valor: string | number | undefined
  atualizar: (campo: keyof Character, valor: any) => void
}

export default function CampoEditavel({
  label,
  campo,
  valor,
  atualizar
}: Props) {
  const [editando, setEditando] = useState(false)

  return (
    <div className="infoItem">
      <span>{label}</span>

      {editando ? (
        <input
          className="editavelInput"
          value={valor ?? ""}
          onChange={(e) => atualizar(campo, e.target.value)}
          onBlur={() => setEditando(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setEditando(false)
            if (e.key === "Escape") setEditando(false)
          }}
          autoFocus
        />
      ) : (
        <strong onClick={() => setEditando(true)}>
          {valor || "-"}
        </strong>
      )}
    </div>
  )
}