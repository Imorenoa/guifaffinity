import { Meme } from "./DatabaseSchema";

export class Mapper {
  toGifsClient = (gifs: Meme[]) => {
    return gifs.map((gif) => ({
      id: gif.id,
      src: gif.images.original.url,
      likes: 0,
      date: gif.import_datetime,
      alt: gif.title,
      tags: gif.tags,
    }));
  };
    
  toGifClient = (gif: Meme) => {
    return {
      id: gif.id,
      src: gif.images.original.url,
      likes: 0,
      date: gif.import_datetime,
      alt: gif.title,
      tags: gif.tags,
    };
  };

}