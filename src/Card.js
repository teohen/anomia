import './Card.css'

function Card(props) {
  if (!props.card) {
    return
  }


  return (
    <div className="card">
    <div style={{backgroundColor: props.card.color || null }} className='square'>
      <span> {props.card.symbol} </span>
    </div>
    <h2> {props.card.text} </h2>
    </div>
  )
}

export default Card;
