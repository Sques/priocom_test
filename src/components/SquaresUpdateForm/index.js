import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSquare} from '../../AC'

import './style.css'

const initialState = {
  id: null,
  title: '',
  color: ''
}

class SquaresUpdateForm extends Component{

  state = initialState;

  componentWillReceiveProps({item : {id, title, color}}){
    this.setState({id, title, color});
  }

  render(){
    console.warn('SquaresUpdateForm render');
    const {id, title, color} = this.state;
    if (!id) return <div>Click on item, to change it</div>
    return (
      <form onSubmit={this.handleSubmit}>
        Title: <input className={this.getClassName('title')} onChange={this.handleChange('title')} type="text" value={title} /><br/>
        Color: <input className={this.getClassName('color')} onChange={this.handleChange('color')} type="text" value={color} /><br/>
        <input type="submit" value="Обновить" />
      </form>
    );
  }

  getClassName = type => (type === 'color' && !this.validateColor()) ? 'form-input__error' : ''

  validateColor = () => {
    const colorRegExp = /^#([a-f0-9]{6}|[a-f0-9]{3})$/;
    return colorRegExp.test(this.state.color);
  }

  handleChange = type => ev => this.setState({[type]: ev.target.value})

  handleSubmit = ev => {
    ev.preventDefault();
    if (!this.validateColor()) return
    this.props.updateSquare(this.state);
  }

}

export default connect(null, {updateSquare})(SquaresUpdateForm);