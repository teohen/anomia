import { useState } from "react"
import './Setup.css'

function Setup(props) {
  const [code, setCode] = useState('')
  const [myNum, setMyNum] = useState()
  const [numPlayers, setNumPlayers] = useState()

  const handleLoadGame = () => {
    props.handleLoadGame(myNum, code, numPlayers)
  }

  return (
    <div className="setup">
      <label htmlFor="codigo">Código:</label>
      <input
        type="text"
        name="codigo"
        placeholder='código'
        value={code}
        onInput={(e) => setCode(e.target.value)}
      />

      <label htmlFor="me">Eu:</label>
      <input
        name="me"
          type="number"
        placeholder='Eu'
        value={myNum}
        onInput={(e) => setMyNum(e.target.value)}
      />
      <label htmlFor="players">Qtd jogadores:</label>
      <input
        name="players"
        type="number"
        placeholder='qtd jogadores'
        value={numPlayers}
        onInput={(e) => setNumPlayers(e.target.value)}
      />
    { code != '' && myNum  && numPlayers &&
      <button onClick={handleLoadGame}>Carregar jogo</button>
    }
    </div>
  )
}

export default Setup
