import { Equipamento } from "./Equipamentos"
import { Arma } from "./Arma"
export type Character = {
  id: number

  /* IDENTIDADE */
  name: string
  jogador: string
  classe: string
  tendencia: string
  sexo: string
  idade: number
  divindade: string
  tamanho: string

  avatar: string

  /* PROGRESSÃO */
  nivel: number
  xp: number


  /* ATRIBUTOS */
  atributos: {
    forca: number
    destreza: number
    constituicao: number
    inteligencia: number
    sabedoria: number
    carisma: number
  }

  /* STATUS (recursos) */
  status: {
    pv: number
    pm: number
    defesa: number
    deslocamento: number
  }

  /* COMBATE */
  combate: {
    dano: string
    iniciativa: number
  }

  arma?: Arma

  equipamentos: {
    armadura?: Equipamento
    escudo?: Equipamento
    acessorios: Equipamento[]
  }
}