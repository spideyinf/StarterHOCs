import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default function(ChildComponent) {
  class ComposedComponent extends Component {
    static contextTypes = {
      router: PropTypes.object,
    }

    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.authenticated) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  function mapStateTopProps(state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateTopProps)(ComposedComponent)
}
