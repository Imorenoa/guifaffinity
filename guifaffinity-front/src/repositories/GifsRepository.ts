import { GifType } from "../interfaces/gif.interface";

export interface GifsRepository {
  getGifs: (tag: string) => Promise<GifType[]>;
}
