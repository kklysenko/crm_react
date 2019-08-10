import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import TaskFilter from './Components/TaskFilter/TaskFilter';
import TaskSubFilter from './Components/TaskSubFilter/TaskSubFilter';

function App() {
  return (
    <div className="App">
			<Header></Header>
			<main className="main">
				<div className="container">
					<h2 className="main-title">Tasks</h2>
					<TaskFilter></TaskFilter>
					<TaskSubFilter></TaskSubFilter>
				</div>
			</main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
