import { useState } from 'react';
import './App.css';
import data from './Data'
import Game from './Game'
import Setup from './Setup';

function App() {
  const getTopCardFromDeck = (pos) => {
    if (pos <= deck.length) {
      return deck[count]
    }
    return null
  }

  const [myNum, setMyNum] = useState(-1)
  const [count, setCount] = useState(0)
  const [deck, setDeck] = useState(data.getCards('hash'))
  const [playDeck, setPlayDeck] = useState([])
  const [points, setPoints] = useState(0)
  const [numPlayers, setNumPlayers] = useState(0)
  const [code, setCode] = useState('')
  const [wildcard, setWildcard] = useState(null)
  const [wildcards, setWildcards] = useState([])
  const [wildOrder, setWildOrder] = useState([])

  const [game, setGame] = useState(false)

  const handleDraw = () => {
    const card = getTopCardFromDeck(count)
    const topWildCard = wildOrder[wildOrder.length - 1]
    if ((parseInt(count) + numPlayers) == topWildCard) {
      alert('CORINGA')
      wildOrder.pop()
      const newcard = wildcards.pop()
      setWildcard(newcard)
      setWildOrder([...wildOrder])
      setWildcards([...wildcards])
    } else {
      setPlayDeck([...playDeck, card])
      setCount(parseInt(count) + parseInt(numPlayers))
    }
  }

  const handlePerdi = () => {
    const newPlayDeck = [...playDeck]
    newPlayDeck.splice(-1)
    setPlayDeck(newPlayDeck)
  }

  const handleGanhei = () => {
    setPoints(points + 1)
  }

  const handleGerarJogo = () => {
    let order = deck.map((card) => card.id)
    order = data.shuffle(order)

    setCode(order.toString())
  }

  const handleLoadGame = (setupMyNum, setupCode, setupNumPlayers) => {
    const newDeck = []
    const order = setupCode.split(",")
    const orderWild = order.slice(0, 8).map((item) => {
      return parseInt(item)
    })

    const sortedListWildcards = data.getWildcards(orderWild).sort((a, b) => b.id - a.id)
    const sortedOrder = [...orderWild].sort(function(a, b){return b-a})

    for (let i of order) {
      const index = deck.findIndex(idx => idx.id === parseInt(i))
      newDeck.push(deck[index])
    }


    setWildOrder(sortedOrder)
    setCode(setupCode)
    setMyNum(setupMyNum)
    setCount(setupMyNum)
    setNumPlayers(parseInt(setupNumPlayers))
    setDeck(newDeck)
    setGame(true)
    setWildcards(sortedListWildcards)
  }

  const handleWildcard = () => {
    const newCard = wildcards.pop()
    wildOrder.pop()
    setWildOrder([...wildOrder])
    setWildcard(newCard)
    setWildcards([...wildcards])
  }

  return (
    <div className="App">
    { game ? 
    <Game count={count} points={points} myNum={myNum} numPlayers={numPlayers}
      handleDraw={handleDraw}
      handleGanhei={handleGanhei}
      handlePerdi={handlePerdi}
      handleWildcard={handleWildcard}
      playDeck={playDeck}
      wildcard={wildcard}
    />
      :
      <>
      <Setup handleLoadGame={handleLoadGame} />
      <button onClick={handleGerarJogo}> gerar </button>
      <textarea value={code}></textarea>
      </>
    }
    </div>
  );
}

export default App;
