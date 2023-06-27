import React, { useEffect, useState } from "react";
import "./App.css";
import { api } from "../api"
import { Header } from "../components/header/header";
import { Search } from "../components/search/search";

interface Gif {
  id: string;
  src: string;
  likes: number;
  date: string;
  alt: string;
  tags: string[];
}

function App() {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    const loadGifs = async () => {
      const receivedGifs = await api.getGifs("");
      setGifs(receivedGifs);
    };
    loadGifs();
  }, []);

  const getFilteredGifs = async () => {
    const receivedGifs = await api.getGifs(searchInput);
    setGifs(receivedGifs);
  };

  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setSearchInput(event.target.value);
    }
  };

  return (
    <div className="app">
      <main className="mainContainer">
        <Header/>
        <section>
          <Search value = {searchInput} onChange = {handleInputChange} action = {getFilteredGifs}></Search>
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
