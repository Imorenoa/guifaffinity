import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "../components/header";
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

  const getFilteredGifs = async (searchInput: string) => {
    const receivedGifs = await gifsServiceContainer.getGifs(searchInput);
    setGifs(receivedGifs);
  };

  return (
    <div className="app">
      <main className="mainContainer">
        <Header />
        <section>
          <Search callback={getFilteredGifs}></Search>
          <Panel gifs={gifs}></Panel>
        </section>
      </main>
    </div>
  );
};
