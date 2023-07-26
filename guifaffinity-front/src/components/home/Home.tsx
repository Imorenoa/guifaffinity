import { useEffect, useState } from "react";
import "./Home";
import { Search } from "../search";
import { Panel } from "../panel";

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
      <section>
        <Search callback={getFilteredGifs}></Search>
        <Panel gifs={gifs}></Panel>
      </section>
    </div>
  );
};
