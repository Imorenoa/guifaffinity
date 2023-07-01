import { Gif } from "./Gif";

export interface GifsRepository {
  getGifs: (tag: string) => Promise<Gif[]>;
}
