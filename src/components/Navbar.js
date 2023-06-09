//import logo from '../logo.svg';
import React from 'react'
// rfc
import PropTypes from 'prop-types'
import './Navbar.css'
// impt

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme={props.mode} > 
        
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutTit}</a>
                </li>
                </ul>
                {/* <form className="d-flex" role="search">
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.modeText}</label>
                </div>
            </div>
        </div>
    </nav>
  )
}
Navbar.propTypes= {
    title: PropTypes.string.isRequired,//compulsory to pass
    aboutTit: PropTypes.string
}

Navbar.defaultProps = {
    title : 'Set Title Here',
    aboutTit : 'Set about here'
}
// if nothing is passed in App.js