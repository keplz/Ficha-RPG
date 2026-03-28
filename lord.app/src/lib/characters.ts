import { personagens } from "@/data/personagens"

export function getCharacterById(id: number) {
  return personagens.find((p) => p.id === id)
}