import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-md fixed-top bg-${props.mode.background} text-${props.mode.color} `}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode.color} `} href="/">Portfolio Shahroz</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse text-${props.mode.color} `} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link text-${props.mode.color} `} aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle text-${props.mode.color} `}href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About my
                </a>
                <ul className={`dropdown-menu bg-${props.mode.background} `}>
                  <li><a className={`dropdown-item text-${props.mode.color} `} href="#education">Education</a></li>
                  <li><a className={`dropdown-item text-${props.mode.color} `} href="#skill">Skills</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode.color} `}  aria-current="page" href="#hire">How to hire you?</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode.color} `}  aria-current="page" href="#contact">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
            <div className="form-check form-switch" style={{'width':'221px','marginLeft':"10px"}}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode.color} mode</label>
            </div>
      </nav>
    </>
  )
}
