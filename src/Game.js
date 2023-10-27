import Card from './Card'
import './Game.css'
import Wildcard from './Wildcard'

function Game(props) {
  const { playDeck, handleGanhei, handlePerdi, wildcard } = props

  const handleSacar = () => {
    props.handleDraw()
  }

  const handleWildcard = () => {
    props.handleWildcard()
  }

  return (
    <div className='game'>
      <div className='top'>
      <Wildcard card={wildcard} />
      </div>
      <div className='middle' >
        <Card card={playDeck[playDeck.length - 1]} wildcard={false} />
        <div className='draw'>
          <button onClick={handleSacar}>sacar</button>
          <button className='handle-wildcard' onClick={handleWildcard}>revelar coringa</button>
        </div>
      </div>
        <div className='bottom'>
          <div className='table-action'>
            <button className='lost' onClick={handlePerdi}>perdi</button>
            <button className='won' onClick={handleGanhei}>ganhei</button>
          </div>
          <div className='table-info'>
            <span>Pontos: {props.points}</span>
            <span>Contador: {props.count}</span>
            <span>Eu: {props.myNum}</span>
            <span>Jogadores: {props.numPlayers}</span>
          </div>
        </div>
      </div>
  )
}

export default Game
