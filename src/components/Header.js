import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav>
        <div className='container'>
          <div className='nav-wrapper'>
            <a className='left brand-logo'>
              Hello World
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
