import React, { useEffect, useState } from "react";
import "./App.css";
import { api } from "../api";
import { Header } from "../components/header/header";
import { Search } from "../components/search/search";
import { Panel } from "../components/panel/panel";
import { GifType } from "../interfaces/gif.interface";

function App() {
  const [gifs, setGifs] = useState<GifType[]>([]);

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
        <Header />
        <section>
          <Search
            value={searchInput}
            onChange={handleInputChange}
            action={getFilteredGifs}
          ></Search>
          <Panel gifs={gifs}></Panel>
        </section>
      </main>
    </div>
  );
}

export default App;
