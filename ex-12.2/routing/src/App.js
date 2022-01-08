import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import HowTo from './HowTo';
import Porfile from './Porfile';
import NotFound from './NotFound';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={< NotFound />} />
          <Route exact path="/" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/porfile/:params"  element={<Porfile data="06/01/2022"/>} />
        </Routes>      
      </BrowserRouter>
    )
  }
}
