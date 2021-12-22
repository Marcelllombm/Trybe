import React, { Component } from 'react';
import './UserName.scss'
import PropTypes from 'prop-types';


export default class UserName extends Component {
  render() {
    return (
      <span className='name'>
        {this.props.name}
      </span>
    )
  }
}

UserName.propTypes ={
  name: PropTypes.string
}

UserName.defaultProps ={
  name:'Marcelo Borges'
}