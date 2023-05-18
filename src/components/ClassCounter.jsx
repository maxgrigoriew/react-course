import React from 'react';

class ClassCounter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this)
  }

  increment () {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h1 style={{color: 'red'}}>{this.state.counter}</h1>
        <button
          className='btn'
          onClick={this.increment}
        >Кнопка</button>
      </div>
    )
  }
}

export default ClassCounter;