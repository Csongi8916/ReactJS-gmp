import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: {}
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Something went wrong :(</h1>
          <p>Error: {this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;