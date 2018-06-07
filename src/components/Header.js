import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  authButton() {
    return <button>Sign In</button>
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">{this.authButton()}</li>
        </ul>
      </nav>
    )
  }
}
