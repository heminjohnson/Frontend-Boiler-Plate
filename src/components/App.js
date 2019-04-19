import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Header = () => <div>Header</div>
const Landing = () => <div>Landing</div>
const dashboard = () => <div>DashBoard</div>
const dashboardTwo = () => <div>DashBoardTwo</div>

const App = () => {
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

export default App
