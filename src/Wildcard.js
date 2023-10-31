import './Wildcard.css'

function Wildcard(props) {

  const handleClick = () => {
    props.handleClick()
  }

  return (
    <div className="wild" onClick={handleClick}>
      { props.card ?
      <div className='wildcard'>
        <div style={{backgroundColor: props.card.color1}} className="wildcard">
        <span> {props.card.symbol1} </span>
        </div>
        <div style={{backgroundColor: props.card.color2}} className="wildcard">
          <span> {props.card.symbol2} </span>
        </div>
      </div>
        : 
        <h2>?</h2>
      }
    </div>

  )
}

export default Wildcard
