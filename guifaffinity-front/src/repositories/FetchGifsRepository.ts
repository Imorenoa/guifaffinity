import { GifType } from "../interfaces/gif.interface";
import { GifsRepository } from "./GifsRepository";

export class FetchGifsRepository implements GifsRepository {
  async getGifs(tag: string): Promise<GifType[]> {
    const response = await fetch(`http://localhost:3001/api/gifs?tag=${tag}`);
    const res = await response.json();
    return res;
  }
}
