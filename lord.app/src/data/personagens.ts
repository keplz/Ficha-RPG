import { Character } from "@/types/Character"

export const personagens: Character[] = [
  {
    id: 1,
    name: "Zamanin",
    jogador: "Mestre",
    classe: "Deus",
    tendencia: "",
    sexo: "",
    idade: 9999,
    divindade: "Tempo",
    tamanho: "Grande",
    avatar: "",
    nivel: 9999,
    xp:99,

    atributos: {
      forca: 14,
      destreza: 12,
      constituicao: 13,
      inteligencia: 10,
      sabedoria: 11,
      carisma: 15
    },

    status: {
      pv: 999,
      pm: 999,
      defesa: 10,
      deslocamento: 9
    },

    combate: {
      dano: "1d12+5",
      iniciativa: 5
    },

    arma: {
      nome: "Espada Longa",
      atributo: 'forca',
      dano: '1d8',
      bonusAtaque: 2
    },

    // 🔥 NOVO BLOCO
    equipamentos: {
      armadura: {
        nome: "Armadura do Tempo",
        tipo: "armadura",
        defesa: 5
      },

      escudo: {
        nome: "Escudo Cronal",
        tipo: "escudo",
        defesa: 3
      },

      acessorios: [
        {
          nome: "Anel da Eternidade",
          tipo: "acessorio"
        },
        {
          nome: "Amuleto do Vazio",
          tipo: "acessorio"
        }
      ]
    }
  }
]