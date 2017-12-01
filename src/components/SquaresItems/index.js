import React, {Component} from 'react';
import Loader from '../Loader'
import {connect} from 'react-redux';
import {mapToArr} from '../../helpers'

import './style.css'

class SquaresItems extends Component{

  render(){

    console.warn('SquaresItems render');

    const {squares} = this.props;

    if(!squares.length) return <Loader/>

    const squaresItems = squares.map((item) => {
      const {id, title, color} = item;
      return (
        <div
          key={id}
          className="squares-items"
          style={{backgroundColor: color}}
          onClick={this.getItem(item)}
        >
          {title}
        </div>
      )
    });

    return (
      <div className="clear-fix">
        {squaresItems}
      </div>
    );

  }

  getItem = id => () => this.props.handleUpdateForm(id);

}

export default connect(({squares}) => ({
  squares: mapToArr(squares)
}))(SquaresItems);