import { Gif } from "../domain/Gif";
import { GifsRepository } from "../domain/GifsRepository";
import { GifDTO } from "./GifDTO";

export class FetchGifsRepository implements GifsRepository {
  async getGifs(tag: string): Promise<Gif[]> {
    const response = await fetch(`http://localhost:3001/api/gifs?tag=${tag}`);
    const res: GifDTO[] = await response.json();
    return res;
  }
  async getGif(id: string): Promise<Gif> {
    const response = await fetch(`http://localhost:3001/api/gifs/${id}`);
    const res: GifDTO = await response.json();
    return res;
  }

}
