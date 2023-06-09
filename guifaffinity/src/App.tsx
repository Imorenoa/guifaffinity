import React, { useEffect, useState } from "react";
import "./App.css";

interface Gif {
  id: string;
  src: string;
  likes: number;
  date: Date;
  alt: string;
  tags: string[];
}

function App() {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    const loadGifs = async () => {
      const response = await fetch("http://localhost:3000/gifs");
      const res = await response.json();
      setGifs(res.results); // gifs en server, pero sin gifs en test
    };
    loadGifs();
  }, []);

  return (
    <div className="app">
      <header>
        <img
          className="logo"
          src="assets/GuifaffinityLogo.svg"
          alt="Logo Guifaffinity"
        />
      </header>
      <section>
        <div className="search">
          <input placeholder="¿Qué quieres buscar? ¡Encuéntralo!"></input>
          <button className="search__button">
            <img
              className="search__button__image"
              src="assets/MagnifyingGlass.svg"
              alt="Botón de búsqueda"
            ></img>
          </button>
        </div>
        <div className="panel">
          <div className="panel__title">
            <img src="assets/Arrow1.svg" alt="not found" />
            <h2>Los guif más trendings del momento</h2>
          </div>
          <div className="panel__gifs">
            {gifs.map((gif) => (
              <img className="gif" key={gif.id} src={gif.src} alt={gif.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
