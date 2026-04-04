import { Equipamento } from "./Equipamentos"
import { Arma } from "./Arma"
import { Habilidade } from "./Habilidade"
import { Magia } from "./Magia"

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
  xpMax: number


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
    pvMax: number
    pm: number
    pmMax: number
    defesa: number
    deslocamento: number
  }

  habilidades?: Habilidade[]

  magia?: Magia[]

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