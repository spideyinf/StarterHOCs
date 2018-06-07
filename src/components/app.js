import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Resources from './Resources'

const About = () => <div>About Component</div>

const NotFound = () => <div>Not Found</div>

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Resources />} />
          <Route exact path="/about" component={() => <About />} />
          <Route component={() => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default App
