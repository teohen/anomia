import Card from './Card'
import './Game.css'
import Wildcard from './Wildcard'

function Game(props) {
  const { playDeck, handleGanhei, handlePerdi, wildcard } = props

  return (
    <div className='game'>
      <div className='top'>
        <Wildcard
          card={wildcard}
          handleClick={props.handleWildcard}
        />
      </div>
      <div className='middle'>
        <Card
          card={playDeck[playDeck.length - 1]}
          wildcard={false}
          handleClick={props.handleDraw}
        />
     </div>
        <div className='bottom'>
          <div className='table-action'>
            <button className='lost' onClick={handlePerdi}>perdi</button>
            <button className='won' onClick={handleGanhei}>ganhei</button>
          </div>
          <div className='table-info'>
            <p>Pontos: {props.points}</p>
            <p>Contador: {props.count}</p>
          </div>
        </div>
      </div>
  )
}

export default Game
