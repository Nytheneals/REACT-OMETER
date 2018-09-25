import React, { Component } from 'react';
import Portal from './Components/Portal';
import Modal from './Components/Modal';
import ToggleRenderPropRevisted from './Components/ToggleRenderPropRevisted';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title">ADVANCED REACT CONCEPTS</h1>
        {/* RENDER PROPS */}
        <ToggleRenderPropRevisted
          client={value => {
            const { greeting, handleClick, on } = value;
            return (
              <div>
                {on && (
                  <Portal className="bas">
                    <Modal title={greeting} handle={handleClick} />
                  </Portal>
                )}
                <button
                  className={
                    on ? 'mdc-button mdc-button--raised' : 'mdc-button mdc-button--outlined'
                  }
                  onClick={handleClick}
                >
                  TOGGLE
                </button>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
