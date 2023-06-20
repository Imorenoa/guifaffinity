import { Response, Router } from "express";
import Gif from "./Interfaces/Gif";
import { Meme } from "./DatabaseSchema";

const routes = Router();

const filterGifsByTag = (databaseGifs: Meme[], tag: string) => {
  return databaseGifs.filter((gif) => {
    gif.tags.includes(`#${tag}`);
  });
};

// GET /api/gifs
routes.get("/gifs", (req, res, next) => {
  const tag = req.query.tag as string;
  const db = req.context.db;
  const gifsDatabase = db.get("memes").take(50).value();
  if (tag) {
    returnGifsByTag(gifsDatabase, tag, res);
    return;
  }

  const gifs: Gif[] = mapGifs(gifsDatabase);
  res.status(200).json(gifs);
});

const returnGifsByTag = (gifs: Meme[], tag: string, res: Response) => {
  const gifsByTag = filterGifsByTag(gifs, tag);

  const mappedGifs: Gif[] = mapGifs(gifsByTag);

  res.status(200).json(mappedGifs);
};

const mapGifs = (gifs: Meme[]) => {
  return gifs.map((gif) => ({
    id: gif.id,
    src: gif.images.original.url,
    likes: 0,
    date: gif.import_datetime,
    alt: gif.title,
    tags: gif.tags,
  }));
};

export default routes;
