export type Atributo =
  | "forca"
  | "destreza"
  | "constituicao"
  | "inteligencia"
  | "sabedoria"
  | "carisma"

export type Pericia = {
  nome: string
  atributo: Atributo
}