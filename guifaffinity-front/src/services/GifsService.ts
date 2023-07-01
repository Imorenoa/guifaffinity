import { Gif } from "../domain/Gif";
import { GifsRepository } from "../domain/GifsRepository";

export class GifsService {
  constructor(private gifsRepository: GifsRepository) {}

  async getGifs(tag: string): Promise<Gif[]> {
    return this.gifsRepository.getGifs(tag);
  }
}
