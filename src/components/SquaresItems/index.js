import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Loader from '../Loader'
import {connect} from 'react-redux';
import {mapToArr} from '../../helpers'

import './style.css'

class SquaresItems extends Component{

  static propTypes = {
    //from ownProps
    handleUpdateForm: PropTypes.func.isRequired,
    //from connect
    squares: PropTypes.array.isRequired
  };

  render(){

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
          {this.truncateString(title)}
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

  truncateString(str, num = 55) {
    return (str.length > num)
      ? str.slice(0, ((num > 3) ? num -= 3 : num)) + '...'
      : str;
  }

}

export default connect(({squares}) => ({
  squares: mapToArr(squares)
}))(SquaresItems);