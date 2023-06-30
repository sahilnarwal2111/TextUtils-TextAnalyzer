import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  
  

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
        </li>
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link" href="/about">{props.about}</a> */}
          {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
        {/* </li> */}
      </ul>
      <form className="d-flex mx-3">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      {/* <div className={`form-check form-switch mx-3 text-${props.mode==='light' ? 'dark' : 'light' }`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label`} htmlhtmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
      </div> */}
      <div className={`form-check form-check-inline text-${props.mode==='light' ? 'dark' : 'light' }`} mx-3>
          <input className="form-check-input" type="radio" onClick={props.setLightMode} name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label className="form-check-label" htmlFor="inlineRadio1">Light</label>
      </div>
      <div className={`form-check form-check-inline text-${props.mode==='light' ? 'dark' : 'light' }`}>
          <input className="form-check-input" type="radio" onClick={props.setBlueMode} name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label className="form-check-label" htmlFor="inlineRadio2">Blue</label>
      </div>
      <div className={`form-check form-check-inline text-${props.mode==='light' ? 'dark' : 'light' }`}>
          <input className="form-check-input" type="radio" onClick={props.setGreenMode} name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
          <label className="form-check-label" htmlFor="inlineRadio3">Green</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.prototype = {
    title : PropTypes.string,
    about : PropTypes.string
}