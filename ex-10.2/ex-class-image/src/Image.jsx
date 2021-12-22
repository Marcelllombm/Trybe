import React from 'react';
import './App.css';

export default class Image extends React.Component {
  render() {
    return <img className='imgbg' src={this.props.source} alt={this.props.alternativeText} />;
  }
}
