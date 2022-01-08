import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link> <br/>
        <Link to="/howto">Howto</Link> <br/>
        <Link to="/porfile">Profile</Link> <br/>
        <h1>Minha Homepage</h1>
      </div>
    );
  }
}
