import { Response, Router } from "express";
import Gif from "./Interfaces/Gif";
import { Meme } from "./DatabaseSchema";
import { Mapper } from "./mapper";

const routes = Router();

const mapper = new Mapper()

const filterGifsByTag = (databaseGifs: Meme[], tag: string) => {
  return databaseGifs.filter((gif) => gif.tags.includes(`#${tag}`));
};

const returnGifsByTag = (gifs: Meme[], tag: string, res: Response) => {
  const gifsByTag = filterGifsByTag(gifs, tag);
  const gifsClient: Gif[] = mapper.toGifsClient(gifsByTag);
  res.status(200).json(gifsClient);
};


// GET /api/gifs
routes.get("/gifs", (req, res, next) => {
  const tag = req.query.tag as string;
  const db = req.context.db;
  const gifsDatabase = db.get("memes").take(50).value()
  if (tag) {
    returnGifsByTag(gifsDatabase, tag, res);
    return;
  }
  const gifsClient: Gif[] = mapper.toGifsClient(gifsDatabase);
  res.status(200).json(gifsClient);
});

//GET /api/gifs/:id
routes.get("/gifs/:id", (req, res, next) => { 
  const db = req.context.db;
  const gif = db.get("memes").find((gif) => gif.id == req.params.id).value();
  if (gif != undefined) {
    const gifClient: Gif = mapper.toGifClient(gif);
    res.status(200).json(gifClient);
  } else {
    res.status(404).json({ error: "GIF not found"});
  }
});

export default routes;
