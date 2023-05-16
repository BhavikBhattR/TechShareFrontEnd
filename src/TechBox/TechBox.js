import './TechBox.css'

const TechBox = (props) => {
    return(
        <div className="container">
        <div className="box">
          <div className="card" id="front">{props.front}</div>
          <div className="card" id="back">{props.back}</div>
          <div className="card" id="left">{props.left}</div>
          <div className="card" id="right">{props.right}</div>
          <div className="card" id="top">{props.top}</div>
          <div className="card" id="bottom">{props.bottom}</div>
        </div>
      </div>
    )
}

export default TechBox;