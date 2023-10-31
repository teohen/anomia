import './Card.css'

function Card(props) {
  if (!props.card) {
    return (
      <h2 onClick={props.handleClick}>vazio</h2>
    )
  }

  const handleClick = () => {
    props.handleClick()
  }

  return (
    <div style={{backgroundColor: props.card.color}} className="card" onClick={handleClick}>
    <div className='card-info rotate'>
      <div style={{backgroundColor: props.card.color || null }} className='square'>
        <span> {props.card.symbol} </span>
      </div>
      <p> {props.card.text} </p>
    </div>
    <hr />
    <div className='card-info'>
      <div style={{backgroundColor: props.card.color || null }} className='square'>
        <span> {props.card.symbol} </span>
      </div>
      <p> {props.card.text} </p>
    </div>
    </div>
  )
}

export default Card;
