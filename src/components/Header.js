import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render () {
    return (
      <nav>
        <div className='container'>
          <div className='nav-wrapper'>
            <div>
              {this.props.hello ? 'hello world came from backend' : 'connection failed'}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({ hello }) {
  return { hello }
}

export default connect(mapStateToProps)(Header)
