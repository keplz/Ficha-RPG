import { getCharacterById } from "@/lib/characters"
import '@/styles/header.css'
import Avatar from "@/components/character/Avatar"
import Status from "@/components/character/Status"

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
    <main style={{ padding: "40px", color: "white" }}>

      <div className='headerContainer'>
        <Avatar personagem={personagem} />
        <Status personagem={personagem} />
      </div>

    </main>
  )
}