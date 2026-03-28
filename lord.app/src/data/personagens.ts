import { Character } from "@/types/Character"

export const personagens: Character[] = [
  {
    id: 1,
    name: "Zamanin",
    jogador: "Mestre",
    classe: "Deus",
    tendencia: "Neutro",
    sexo: "Desconhecido",
    idade: 9999,
    divindade: "Tempo",
    tamanho: "Médio",
    avatar: "",
    nivel: 9999,
    xp: 0,

    atributos: {
      forca: 14,
      destreza: 12,
      constituicao: 13,
      inteligencia: 10,
      sabedoria: 11,
      carisma: 15,
    },

    status: {
      pv: 35,
      pm: 20,
      defesa: 16,
      deslocamento: 9,
    },

    combate: {
      ataque: 8,
      dano: "1d8+3",
      iniciativa: 2,
    },
  },
]