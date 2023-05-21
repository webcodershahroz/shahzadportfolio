import React from 'react'

export default function SkillCards(props) {
  return (
    <>
      <div className="cards d-flex justify-content-evenly mx-2 align-items-center flex-column">
        <div className="card" style={{"width":" 20rem"}}>
          <div className={`card-body  bg-${props.mode.background}`} >
            <h5 className="card-title"><b>{props.name}</b></h5>
            <p className="card-text">{props.detail}</p>
          </div>
        </div>
      </div>
    </>
  )
}
