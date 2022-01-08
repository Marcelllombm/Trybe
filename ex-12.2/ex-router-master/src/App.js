import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
// import NotFoundo from './components/NotFoundo';
import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>
        <Routes>
          {/* <Route path="*" element={<NotFoundo />}/> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={ <Users greetingMessage="Good Morning" /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
