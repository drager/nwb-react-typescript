import {Component} from 'react'
import * as React from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-nwb-test Demo</h1>
        <Example />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
