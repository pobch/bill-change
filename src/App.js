import React, { Component } from 'react'
import { calculate } from './utils/calculate'

class App extends Component {
  state = {
    inputDollars: '',
    resultString: ''
  }

  handleChange = event => {
    this.setState({
      inputDollars: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const inputCents = +(+this.state.inputDollars * 100).toFixed()
    const resultString = calculate(inputCents)
    this.setState({ resultString })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Input the amount of dollars (up to 2 decimal points)</h3>
          <input
            type="number"
            min=".01"
            step=".01"
            required
            value={this.state.inputDollars}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Your change is:</h3>
        <p>{this.state.resultString}</p>
      </div>
    )
  }
}

export default App
