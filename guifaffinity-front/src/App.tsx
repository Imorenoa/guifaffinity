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
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setSearchInput(event.target.value);
    }
  };

  const getFilteredGifs = () => {
    fetch(`http://localhost:3001/gifs?tags=${searchInput}`);
  };

  return (
    <div className="app">
      <main className="mainContainer">
        <header>
          <img
            className="logo"
            src="assets/GuifaffinityLogo.svg"
            alt="Logo Guifaffinity"
          />
        </header>
        <section>
          <div className="search">
            <input
              className="search__input"
              placeholder="¿Qué quieres buscar? ¡Encuéntralo!"
              value={searchInput}
              onChange={handleInputChange}
              onKeyDown={getFilteredGifs}
            ></input>
            <button className="search__button" onClick={getFilteredGifs}>
              <img
                className="search__button--image"
                src="assets/MagnifyingGlass.svg"
                alt="Botón de búsqueda"
              ></img>
            </button>
          </div>
          <div className="panel">
            <div className="panel__title">
              <img
                className="panel__title--icon"
                src="assets/Arrow1.svg"
                alt="Icono de busqueda"
              />
              <h2 className="panel__title--text">
                Los guif más trendings del momento
              </h2>
            </div>
            <div className="panel__gifs">
              {gifs.map((gif) => (
                <img className="gif" key={gif.id} src={gif.src} alt={gif.alt} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
