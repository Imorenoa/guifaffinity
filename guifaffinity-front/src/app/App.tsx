import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { Header } from "../components/Header/Header";
import { Search } from "../components/Search";
import { GifType } from "../interfaces/gif.interface";
import { Panel } from "../components/Panel";
import { GifsRepository } from "../repositories/GifsRepository";

interface Props {
  gifsRepository: GifsRepository;
}

export const App: FC<Props> = ({ gifsRepository }) => {
  const [gifs, setGifs] = useState<GifType[]>([]);

  useEffect(() => {
    const loadGifs = async () => {
      const receivedGifs = await gifsRepository.getGifs("");
      setGifs(receivedGifs);
    };
    loadGifs();
  }, []);

  const getFilteredGifs = async () => {
    const receivedGifs = await gifsRepository.getGifs(searchInput);
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
