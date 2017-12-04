import React, {Component} from 'react';

import SquaresItems from './SquaresItems'
import SquaresUpdateForm from './SquaresUpdateForm'

class App extends Component {

  state = {
    updateItem: null
  }

  handleUpdateForm = item => (
    this.setState({
      updateItem: item
    })
  )

  render(){
    return [
      <SquaresItems
        key="SquaresItems"
        handleUpdateForm={this.handleUpdateForm}
      />,
      <SquaresUpdateForm
        key="SquaresUpdateForm"
        item={this.state.updateItem}
      />
    ];
  }
}

export default App;