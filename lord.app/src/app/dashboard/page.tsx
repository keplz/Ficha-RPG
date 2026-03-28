"use client"

import { useState } from "react"

import CharacterCard from "@/components/character/CharacterCard"
import { personagens } from "@/data/personagens"   


import Modal from "@/components/modal/Modal"

import "@/styles/dashboard.css"

export default function MestreHub() {

  const [modalAberto, setModalAberto] = useState(false)

  return (
    <main className="dashboard">

      <h1 className="title">Dashboard do Mestre</h1>

      <div className="panel">

        <h2 className="panelTitle">Fichas e Personagens</h2>

        <div className="characterGrid">

          {personagens.map((p) => (
          <CharacterCard key={p.id} personagem={p}/>
          ))}

        <button
          className="addCharacter"
          onClick={() => setModalAberto(true)}
        >
          +
        </button>
    </div>

  </div>

  <Modal
    aberto={modalAberto}
    fechar={() => setModalAberto(false)}
  >
    <h2>Debug Modal</h2>
    <p>Modal funcionando.</p>
  </Modal>

</main>
  )
}