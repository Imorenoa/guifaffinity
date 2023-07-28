import { Gif } from "./Gif";

export interface GifsRepository {
  getGifs: (tag: string) => Promise<Gif[]>;
}
export interface GifsRepository {
  getGif: (id: string) => Promise<Gif>;
}
