import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <img className='logo' src='assets/GuifaffinityLogo.svg' alt='logo not found'/>
      </header>
      <section>
        <div className='search'>
          <input></input>
          <button></button>
        </div>
        <div className='panel'>
          <div className='panel__title'>
            <img src='assets/Arrow1.svg' alt='not found'/>
            <h2>Los guif más trendings del momento</h2>
          </div>
          <div className='panel__gifs'>
            <img data-testid='gif' className='gif' src='assets/Gif1.svg' alt='gif not found'/>
            <img className='gif' src='assets/Gif1.svg' alt='gif not found'/>
            <img className='gif' src='assets/Gif1.svg' alt='gif not found'/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
