import React from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
import Add from './Components/add'
import View from './Components/view'
import './App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Welcome to Mern App</h1>
        <nav className="naviagation">
          <ul>
            <li className="listItem">
              <Link to="/add">Add</Link>
            </li>
            <li className="listItem">
              <Link to="/view">View All Users</Link>
            </li>
          </ul>
        </nav>
        <Route path="/add" component={Add} />
        <Route path="/view" component={View}/>
      </div>
    </Router>
  );
}

export default App;
