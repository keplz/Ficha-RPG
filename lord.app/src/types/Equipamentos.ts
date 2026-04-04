export type TipoEquipamento =
  | "armadura"
  | "escudo"
  | "acessorio"

export type Equipamento = {
  nome: string
  tipo: TipoEquipamento

  defesa?: number

  descricao?: string
}