import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { SvcError } from '../Error'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: {},
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      error,
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return <SvcError error={this.state.error} />
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
}
