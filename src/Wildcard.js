import './Wildcard.css'

function Wildcard(props) {

  if (!props.card) {
    return 
  }

  return (
    <div className="wild">
    <div style={{backgroundColor: props.card.color1}} className="wildcard">
      <span> {props.card.symbol1} </span>
    </div>
    <hr />
    <div style={{backgroundColor: props.card.color2}} className="wildcard">
    <span> {props.card.symbol2} </span>
    </div>
    </div>

  )
}

export default Wildcard
