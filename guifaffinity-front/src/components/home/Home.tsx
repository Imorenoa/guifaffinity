import { useEffect, useState } from "react";
import "./Home";
import { Header } from "../header";
import { Search } from "../search";
import { Panel } from "../panel";
import "./Home.css";

import { gifsServiceContainer } from "../../services/_di/GifsService.container";
import { Gif } from "../../domain/Gif";

export const Home = () => {
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
    <div className="home">
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
