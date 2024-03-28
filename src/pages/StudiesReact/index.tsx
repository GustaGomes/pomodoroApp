/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { StudiesContainer } from './styles'

function avisarApi(){
  console.log("Pelé chamou o maradora")
}

export function StudiesPage() {
  const [list, setList] = useState<string[]>([])

  // =========== Exemplo do filtro 
  const [filter, setFilter] = useState('')

  const filteredList = list.filter( item => item.includes(filter))

  useEffect(() => {

  }, [filter])

  //  =================

  useEffect(() => {
    avisarApi()
  }, [list])
  // Por padrão ele vai ser chamado assim quando a aplicação abrir
  // e também quando a variavel que ele esta monitorando 
  // é atualizada ( no caso o list )
  //  ===========================================


  //  Quando precisar fazer uma chamada a api ou qualquer outra que só precisa ser chamada uma vez 
  useEffect(() => {
    console.log('Primeira renderização com exemplo a uma api')
    fetch('https://api.github.com/users/GustaGomes/repos')
    .then( response => response.json())
    .then( data => {
      setList(data.map((item: any) => item.full_name ))
    })
  }, [])
  // você faz a chamada sem passar nada no [] de monitoramento 
  // Ex: esse acima 


  function addToList(){
    setList(state => [...state, 'teste'])
  }
  return (
    <StudiesContainer>
      <h1>Hooks React - Use Effect</h1>

      <div>
        <input 
          type="text" 
          onChange={ e => setFilter(e.target.value)} 
          value={filter}
        />
      </div>

      <div>
        <ul>
          {list.map( item => <li>{ item }</li>)}
        </ul>

        {/* exemplo filter */}
        <ul>
          {filteredList.map( item => <li>{ item }</li>)}
        </ul>
        {/* exemplo filter */}

        <button onClick={addToList}>Adicionar</button>
      </div>

      <h1>=========================================</h1>
    </StudiesContainer>
  )
}