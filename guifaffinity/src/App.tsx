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
            <img data-testid='gif' className='gif' src='https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif' alt='gif not found'/>
            <img className='gif' src='https://media.giphy.com/media/KTnBZB1CsqMOQ/giphy.gif' alt='gif not found'/>
            <img className='gif' src='https://media.giphy.com/media/2QYXlNR3pw0OtNC9Ex/giphy.gif' alt='gif not found'/>
            <img className='gif' src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWU0MzNlODQ3NmU1MTljYTg0Zjk2YTU2ZjRkNmJiODczODBmYzkzOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/YmHk04qjJm4kiGwZWJ/giphy.gif' alt='gif not found'/>
            <img className='gif' src='https://media.giphy.com/media/1uPiL9Amv5zkk/giphy.gif' alt='gif not found'/>
            <img className='gif' src='https://media.giphy.com/media/KTnBZB1CsqMOQ/giphy.gif' alt='gif not found'/>
            <img className='gif' src='https://media.giphy.com/media/2QYXlNR3pw0OtNC9Ex/giphy.gif' alt='gif not found'/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
