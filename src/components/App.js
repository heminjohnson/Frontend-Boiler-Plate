import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
const Landing = () => <div>Landing</div>
const dashboard = () => <div>DashBoard</div>
const dashboardTwo = () => <div>DashBoardTwo</div>

class App extends Component {
  componentDidMount () {
    this.props.helloWorld()
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/one' component={dashboard} />
            <Route path='/two' component={dashboardTwo} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
