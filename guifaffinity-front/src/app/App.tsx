import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "../components/header/header";
import { Search } from "../components/search";
import { Panel } from "../components/panel";

import { gifsServiceContainer } from "../services/_di/GifsService.container";
import { Gif } from "../domain/Gif";

export const App = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    const loadGifs = async () => {
      const receivedGifs = await gifsServiceContainer.getGifs("");
      setGifs(receivedGifs);
    };
    loadGifs();
  }, []);

  const getFilteredGifs = async () => {
    const receivedGifs = await gifsServiceContainer.getGifs(searchInput);
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
};
