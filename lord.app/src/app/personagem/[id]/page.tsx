import { getCharacterById } from "@/lib/characters"
import '@/styles/header.css'
import Avatar from "@/components/character/Avatar"
import Status from "@/components/character/Status"
import Atributos from "@/components/character/Atributos"
import Combate from "@/components/character/Combate"
import Pericias from "@/components/character/Pericias"
import Equipamentos from "@/components/character/Equipamentos"
import Habilidades from "@/components/character/Habilidades"
import Magias from "@/components/character/Magias"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function PersonagemPage({ params }: Props) {

  const { id } = await params

  const personagem = getCharacterById(Number(id))

  if (!personagem) {
    return <h1>Personagem não encontrado</h1>
  }

  return (
    <main className="fichaContainer">

      <div className='headerContainer'>
        <Avatar personagem={personagem} />
        <Status personagem={personagem} />
      </div>
      <div className="mainGrid">
        <Atributos personagem={personagem} />
        <Combate personagem={personagem} />
        <Pericias personagem={personagem} />
        <Equipamentos personagem={personagem} />
        <Habilidades personagem={personagem} />
        <Magias personagem={personagem} />
      </div>

    </main>
  )
}